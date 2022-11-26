// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { BN, expectEvent, expectRevert, constants } = require('@openzeppelin/test-helpers');

async function main() {

  const TOTAL_SUPPLY = new BN('10000000000000000000000');
  const HopeToken = await hre.ethers.getContractFactory("HopeToken");
  const hopeToken = await HopeToken.deploy("Hope Token", "HT", TOTAL_SUPPLY.toString());

  await hopeToken.deployed();

  console.log(hopeToken.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
