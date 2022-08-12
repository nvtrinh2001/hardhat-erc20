# Hardhat ERC20 Token

This project is used to create an ERC20 token both manually and using [Open Zeppelin](https://www.openzeppelin.com/) library.

# Overview

An ERC20 token can be created by using the [ERC20 document](https://eips.ethereum.org/EIPS/eip-20).

Open Zeppelin makes the process of creating an ERC20 token much more simpler and easier.

# Getting Started

## Requirements

-   git
-   Node.js
-   yarn

## Quick Start

```
git clone git@github.com:nvtrinh2001/hardhat-erc20.git
cd hardhat-erc20
yarn
```

# Deploy

## Deploy on hardhat network

`yarn hardhat deploy`

## Deploy on a Testnet or a Mainnet

Set up all the environment variables based on the _.env.example_ file

Run:

`yarn hardhat deploy --network kovan`

# Verify on Etherscan

Get the etherscan API key and put it in the _.env_ file. The token will be automatically verified by running the deployment scripts.
