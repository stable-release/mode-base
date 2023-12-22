// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import {AlgebraFactory} from "../../../Algebra/src/core/contracts/AlgebraFactory.sol";
import {AlgebraPoolDeployer} from "../../../Algebra/src/core/contracts/AlgebraPoolDeployer.sol";

contract DeployScript is Script {
    function run() public {
        string memory mnemonic = "${MNEMONIC}";

        (address deployer, uint256 privateKey) = deriveRememberKey(mnemonic, 0);

        bytes32 hash = keccak256(("Signed by deployer"));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(privateKey, hash);
        // deployer is the address of pool deployer
        vm.startBroadcast(deployer);

        AlgebraFactory algebra_factory = new AlgebraFactory(
            deployer,
            0xBBd707815a7F7eb6897C7686274AFabd7B579Ff6,
            deployer
        );

        // factory contract deploys a community vault in constructor
        // here we get the address to deploy the Pool Deployer
        address community_vault = algebra_factory.communityVault();

        AlgebraPoolDeployer pool_deployer_factory = new AlgebraPoolDeployer(
            address(algebra_factory),
            community_vault,
            0xBBd707815a7F7eb6897C7686274AFabd7B579Ff6,
            deployer
        );

        vm.stopBroadcast();
    }
}
