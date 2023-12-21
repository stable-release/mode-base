// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import "../../../src/base/oracles/PriceOracle.sol";

import "../config.sol";

// forge create --rpc-url https://sepolia.mode.network --private-key <YOUR_PRIVATE_KEY> src/MyERC20.sol:MyERC20 --verify --verifier blockscout --verifier-url https://sepolia.explorer.mode.network/api\?

// source .env
// RUST_BACKTRACE=1 forge script script/mode_sepolia/Mocks/oracle.s.sol:DeployScript --private-key  --rpc-url modesepo --broadcast --verify -vvvv
// forge verify-contract script/mode_sepolia/Mocks/oracle.s.sol:DeployScript  --verifier blockscout --verifier-url https://sepolia.explorer.mode.network/api\?
contract DeployScript is Script {
    function run() public {
        string memory mnemonic = "${MNEMONIC}";

        (address deployer, uint256 privateKey) = deriveRememberKey(mnemonic, 0);

        bytes32 hash = keccak256(("Signed by deployer"));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(privateKey, hash);

        vm.startBroadcast(deployer);
        PriceOracle priceOracle = new PriceOracle(
            0xBBd707815a7F7eb6897C7686274AFabd7B579Ff6,
            deployer,
            deployer
        );
        vm.stopBroadcast();
    }
}
