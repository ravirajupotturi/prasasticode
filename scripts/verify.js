/* eslint-disable no-process-exit */
const hre = require("hardhat");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function main() {
  // We get the contract to deploy
  const contractAddress = "0x83ad06F70f205651dD87c525e5D39Ef6F91C746B";
  const contractInstance = await hre.ethers.getContractAt(
    "SchoolCGPA",
    contractAddress
  );

  await hre.run("verify:verify", {
    contract: "contracts/SchoolCGPA.sol:SchoolCGPA",
    address: contractInstance.target,
    constructorArguments: [],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
