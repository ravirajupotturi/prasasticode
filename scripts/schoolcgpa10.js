/* eslint-disable no-process-exit */
const hre = require("hardhat");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function main() {
  // We get the contract to deploy
  const SchoolCGPA = await hre.ethers.getContractFactory("SchoolCGPA10");
  const contractInstance = await SchoolCGPA.deploy(); //contructor arguments go here
  console.log(`Contract deployed..Waiting for confirmation`);

  await contractInstance.waitForDeployment();
  await sleep(30000);
  console.log("SchoolCGPA Contract deployed at:", contractInstance.target);

  await hre.run("verify:verify", {
    contract: "contracts/SchoolCGPA10.sol:SchoolCGPA10",
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
