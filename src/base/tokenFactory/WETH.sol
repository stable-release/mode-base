// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Token} from "./Token.sol";

contract WETH is Token {
    bool private lock = true;
    address SFS_Recipient;

    constructor(
        address SFS_Register_Contract,
        address recipient
    )
        Token(
            "Wrapped Ethereum",
            "WETH",
            0,
            address(msg.sender),
            SFS_Register_Contract
        )
    {
        SFS_Recipient = recipient;
    }

    function deposit() public payable {
        update(address(0), address(msg.sender), msg.value);
    }

    function withdraw(uint256 amount) public isLocked {
        require(balanceOf(msg.sender) >= amount);
        update(address(msg.sender), address(0), amount);
    }

    modifier isLocked() {
        require(lock, "unlocked");
        lock = false;
        _;
        lock = true;
    }
}
