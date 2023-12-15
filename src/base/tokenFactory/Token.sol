// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, Ownable {
    constructor(
        string memory name,
        string memory ticker,
        uint256 totalSupply,
        address owner
    ) ERC20(name, ticker) Ownable(owner) {
        owner = address(msg.sender);
        update(address(this), address(msg.sender), totalSupply);
    }

    /**
     * @dev All changes to transfers are modified here as per openzeppelin spec
     *
     * Emits a {Transfer} event.
     */
    function update(address from, address to, uint256 value) public onlyOwner {
        _update(from, to, value);
    }
}
