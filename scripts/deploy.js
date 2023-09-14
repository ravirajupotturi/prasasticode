/* eslint-disable no-process-exit */
const hre = require("hardhat");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function main() {
  // We get the contract to deploy
  const SchoolCGPA = await hre.ethers.getContractFactory("SchoolCGPA");
  const contractInstance = await SchoolCGPA.deploy(); //contructor arguments go here

  await contractInstance.waitForDeployment();
  await sleep(30000);
  console.log("SchoolCGPA Contract deployed at:", contractInstance.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
