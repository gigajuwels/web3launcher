// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, upgrades } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Figura = await ethers.getContractFactory("Figura");
  const figuraContract = await upgrades.deployProxy(Figura, ["0x899FA942F90AB4E2767060AEE41e61823359Bb46", "0x5498BB86BC934c8D34FDA08E81D444153d0D06aD"]);

  await figuraContract.deployed();

  console.log("Game Directory deployed to ", figuraContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
