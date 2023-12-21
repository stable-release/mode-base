// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {SFS} from "../Mode/ModeSFS.sol";

/// @title Price Oracle Feed
/// @notice Provides on-chain prices for assets via off-chain Pyth price feeds
/// @dev SHOULD NOT BE USED FOR PRODUCTION - UNTESTED CODE - TEST USE ONLY
contract PriceOracle is SFS {
    address SFS_Recipient;

    address oracle_server;
    mapping(address => uint256) public TokenToPrice;

    constructor(
        address SFS_Register_Contract,
        address recipient,
        address _oracle_server
    ) SFS(SFS_Register_Contract, recipient) {
        SFS_Recipient = recipient;
        oracle_server = _oracle_server;
    }

    // Oracle functions
    // Called off-chain
    // Fixed-point numeric saved / per call
    function updatePrices(address token, uint256 price) external returns (address, uint256) {
        require(
            address(msg.sender) == oracle_server,
            "Must be called by server"
        );
        TokenToPrice[token] = price;
        return (token, price);
    }
}
