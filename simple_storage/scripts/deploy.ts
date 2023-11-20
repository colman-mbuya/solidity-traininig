// https://sepolia.etherscan.io/address/0xD66904937DA22a99c4883587462732eB694f0691#code
import { ethers, network, run } from "hardhat";

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying Simple Storage contract....")
  const simpleStorage = await SimpleStorageFactory.deploy()
  await simpleStorage.waitForDeployment()
  // await simpleStorage.deployed() // No longer needed? Doesn't appear so. May need to update the course material
  const contractAddress = await simpleStorage.getAddress();
  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for tx confirmations...")
    await simpleStorage.deploymentTransaction()?.wait(6)
    await verify(contractAddress, [])
  }

  console.log(`Simple storage contract deployed to ${contractAddress}`)

  let currentValue = await simpleStorage.retrieve()
  console.log(`Current value: ${currentValue}`)

  console.log("Updating storage value...")
  let transactionResponse = await simpleStorage.store(7)
  await transactionResponse.wait()
  currentValue = await simpleStorage.retrieve()
  console.log(`Current value: ${currentValue}`)
  
}

const verify = async (contractAddress: string, args: any[]) => {
    console.log(`Verifying contract at ${contractAddress}`)
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        } else {
            console.log(error)
        }
    }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
