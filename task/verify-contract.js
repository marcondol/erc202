const { task } = require("hardhat/config");

task("verify-contract", "Verify Certificate Token Contract")
  .addParam("address", "The contract address")
  .setAction(async (taskArgs, { run }) => {
    console.log(taskArgs)
    await run("verify:verify", {
        address: taskArgs.address,
        contract: "contracts/HopeToken.sol:HopeToken", // <path-to-contract>:<contract-name>
        constructorArguments: [
            "Hope Token", "HT", 1000000000
        ],
      });
  })

  