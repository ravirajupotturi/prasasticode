require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    localhost: {
      url: "http://localhost:8545",
    },
    polygon: {
      url: process.env.POLYGON_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      gasPrice: 105000000000,
    },
    mumbai: {
      url: process.env.MUMBAI_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      gasPrice: 30000000000,
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};
