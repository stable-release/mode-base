// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import {WETH} from "../../../src/base/tokenFactory/WETH.sol";

contract DeployScript is Script {
    function run() public {
        string memory mnemonic = "${MNEMONIC}";

        (address deployer, uint256 privateKey) = deriveRememberKey(mnemonic, 0);

        bytes32 hash = keccak256(("Signed by deployer"));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(privateKey, hash);

        vm.startBroadcast(deployer);
        WETH weth = new WETH(0xBBd707815a7F7eb6897C7686274AFabd7B579Ff6, deployer);
        vm.stopBroadcast();
    }
}
