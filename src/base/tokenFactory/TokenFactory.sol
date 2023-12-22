// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Token} from "./Token.sol";
import {SFS} from "../Mode/ModeSFS.sol";

contract TokenFactory is SFS {
    bool isLocked = false;

    constructor(address sfs_registrar) SFS(sfs_registrar, address(msg.sender)) {}

    function createToken(
        string memory name,
        string memory ticker,
        uint256 totalSupply,
        address sfs_registrar
    ) public returns (address location) {
        Token _token = new Token(
            name,
            ticker,
            totalSupply,
            address(msg.sender),
            sfs_registrar
        );
        return address(_token);
    }

    modifier nonReentrant() {
        require(isLocked == false, "Reentrancy attempt");
        isLocked = true;
        _;
        isLocked = false;
    }
}
