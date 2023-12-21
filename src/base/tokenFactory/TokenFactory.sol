// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Token} from "./Token.sol";

contract TokenFactory {
    using SafeERC20 for ERC20;

    bool isLocked = false;

    constructor() {}

    function createToken(
        string memory name,
        string memory ticker,
        uint256 totalSupply
    ) external returns (address location) {
        ERC20 _token = new Token(
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
