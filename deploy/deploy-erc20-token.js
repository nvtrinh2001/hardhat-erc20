const { network } = require("hardhat");
const {
    developmentChains,
    INITIAL_SUPPLY,
    VERIFICATION_BLOCK_CONFIRMATIONS,
} = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS;

    log("Deploying ERC20 token...");
    const myToken = await deploy("MyToken", {
        from: deployer,
        args: [INITIAL_SUPPLY],
        log: true,
        waitConfirmations: waitBlockConfirmations,
    });
    log(`MyToken is successfully deployed at ${myToken.address}`);

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API
    ) {
        await verify(myToken.address, [INITIAL_SUPPLY]);
    }
};

module.exports.tags = ["all", "token"];
