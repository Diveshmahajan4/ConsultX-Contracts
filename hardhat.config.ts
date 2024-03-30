import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    lumiotestnet: {
      url: "https://testnet.lumio.io",
      accounts: [process.env.WALLET_KEY as string],
      chainId: 9990,
      gasPrice: 3000000000,
    },
    cardano: {
      url: "https://rpc.cardona.zkevm-rpc.com",
      chainId: 2442,
      accounts: [process.env.WALLET_KEY as string],
    },
    avail: {
      url: "https://op-avail-sepolia.alt.technology",
      chainId: 202402021700,
      accounts: [process.env.WALLET_KEY as string],
    },
    coredao: {
      url: "https://rpc.test.btcs.network",
      chainId: 1115,
      accounts: [process.env.WALLET_KEY as string],
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.POLYGON_API_KEY as string}`,
      chainId: 80001,
      accounts: [process.env.WALLET_KEY as string],
    },
  },
  defaultNetwork: "hardhat",
};

export default config;