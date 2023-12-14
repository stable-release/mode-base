const { ethers } = require("ethers")

/**
 * Verifies signed message and returns boolean
 * @param {JSON} data JSON containing all parts of the message
 * @param {String} signed_message stringified claim
 * @param {String} signer_address address of signer
 * @returns {bool}
 */
function verify_message(data = {}, signed_message, signer_address) {
    const actual_address = ethers.verifyMessage(data, signed_message);
    return signer_address == actual_address;
}

module.exports = {
    verify_message,
    
}