const hre = require("hardhat");

async function main() {
  const Chat = await hre.ethers.getContractFactory("Chat");
  const chat = await Chat.deploy(); // Deploy contract
  await chat.waitForDeployment(); // Ensure it's fully deployed

  console.log("Chat contract deployed to:", await chat.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
