import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";

export default task("block-number", "Prints the current block number").setAction(
    async (_taskargs:any[], hre:HardhatRuntimeEnvironment) => {
        await hre.ethers.provider.getBlockNumber().then((blockNumber: number) => {
            console.log(`Current block number: ${blockNumber}`)
        })
})