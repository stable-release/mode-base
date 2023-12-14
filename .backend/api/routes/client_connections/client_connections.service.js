const knex = require("../../db/connection");

/**
 * Creates a new client entry
 * @param {String} signer_address
 * @param {String} signed_message
 * @param {JSON} message_data
 * @returns {address} signer_address
 */
function create(signer_address, signed_message, message_data) {
    return knex("clientConnections")
        .insert({
            signer_address: signer_address,
            signed_message: signed_message,
            message_data: message_data,
        })
        .returning("*")
        .then((all_connections) => all_connections[0]);
}

/**
 * Finds client entry by signer address
 * @param {address} signer_address
 * @returns {number} signer_id
 */
function read(signer_address) {
    return knex("clientConnections")
        .select("signer_id")
        .where("signer_address", signer_address)
        .first();
}

/**
 * Updates a client entry
 * @param {ID} signer_id
 * @param {String} signer_address
 * @param {String} signed_message
 * @param {JSON} message_data
 * @returns {address} signer_address
 */
function update(signer_id, signer_address, signed_message, message_data) {
    return knex("clientConnections")
        .where("signer_id", signer_id)
        .update({
            signer_address: signer_address,
            signed_message: signed_message,
            message_data: message_data,
        }, ["signer_id", "signer_address"])
}

module.exports = {
    create,
    read,
    update,
};
