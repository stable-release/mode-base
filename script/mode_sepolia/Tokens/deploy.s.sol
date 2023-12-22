// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import {TokenFactory} from "../../../src/base/tokenFactory/TokenFactory.sol";

/**
RUST_BACKTRACE=1 forge script script/mode_sepolia/Tokens/deploy.s.sol:DeployScript --chain-id 919 --rpc-url modesepo --verifier-url https://sepolia.explorer.mode.network/api\?  --broadcast --verify -vvvv
*/

contract DeployScript is Script {
    TokenFactory _factory;
    function run() public {
        string memory mnemonic = "${MNEMONIC}";

        (address deployer, uint256 privateKey) = deriveRememberKey(mnemonic, 0);

        bytes32 hash = keccak256(("Signed by deployer"));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(privateKey, hash);
        // deployer is the address of pool deployer
        vm.startBroadcast(deployer);

        _factory = new TokenFactory(0xBBd707815a7F7eb6897C7686274AFabd7B579Ff6);

        vm.stopBroadcast();
        vm.startBroadcast(deployer);

        _factory.createToken("Core Coin", "CCT", 420000000000000000000000, 0xBBd707815a7F7eb6897C7686274AFabd7B579Ff6);
        vm.stopBroadcast();
    }
}
