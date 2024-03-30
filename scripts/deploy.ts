// const hre = require("hardhat");

// async function main() {
//   const contract = await hre.ethers.getContractFactory("consultVerse");
//   const deploy = await contract.deploy();
//   const contractaddress = await deploy.getAddress();
//   console.log(`Contact Address of deployed Contract is : ${contractaddress}`);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

import { ethers } from "hardhat";

async function main() {
  const token = await ethers.deployContract('consultVerse', { gasLimit: 1000000 });
  await token.waitForDeployment();
  console.log(`Token contract deployed at ${token.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
