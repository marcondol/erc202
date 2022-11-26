const { task } = require("hardhat/config");
const { abi } = require("../artifacts/contracts/HopeToken.sol/HopeToken.json");

task("transfer-token", "Burn token")
  .addParam("amount", "amount token will burn")
  .addParam("to", "send token to")
  .setAction(async (taskArgs, { ethers }) => {
    const contractAddress = "0x9F73bc564180B72963Ad1fD76C6db7bcAB5923E3"
    const [deployer]  = await ethers.getSigners();
    const hopeToken = new ethers.Contract(contractAddress, abi, deployer)
    let res = await hopeToken.transfer(taskArgs.to, ethers.utils.parseEther(taskArgs.amount))
    console.log(res)
})