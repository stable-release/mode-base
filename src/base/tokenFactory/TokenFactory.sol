// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Token} from "./Token.sol";

contract TokenFactory {
    bool isLocked = false;

    constructor() {}

    function createToken(
        string memory name,
        string memory ticker,
        uint256 totalSupply
    ) external returns (address location) {
        Token _token = new Token(
            name,
            ticker,
            totalSupply,
            address(msg.sender)
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
