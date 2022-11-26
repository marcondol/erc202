require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("./task");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.1",
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
      chainId: 1337,
    },
    development: {
      url: "HTTP://127.0.0.1:8545",
      chainId: 1337,
      accounts: [process.env.DEV_PRIVATE_KEY],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      chainId: 80001,
      accounts: [process.env.DEV_PRIVATE_KEY],
    },
    polygon: {
      url: "https://rpc-mainnet.matic.quiknode.pro",
      chainId: 137,
      accounts: [process.env.DEV_PRIVATE_KEY],
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org",
      chainIds: 97,
      accounts: [process.env.DEV_PRIVATE_KEY]
    }

  },
  etherscan: {
    apiKey: {
      // ethereum
      mainnet: process.env.ETHERSCAN_API_KEY,
      ropsten: process.env.ETHERSCAN_API_KEY,
      rinkeby: process.env.ETHERSCAN_API_KEY,
      goerli: process.env.ETHERSCAN_API_KEY,
      kovan: process.env.ETHERSCAN_API_KEY,
      sepolia: process.env.ETHERSCAN_API_KEY,
      // polygon
      polygon: process.env.POLYGONSCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
      bscTestnet: process.env.BINANCE_API_KEY,
    },
  },
  dependencyCompiler: {
    paths: [
      '@opengsn/contracts/src/forwarder/Forwarder.sol',
    ],
  }
};
