/**
 * Data from frontend for signed verification
 * - Signer address
 * - Signed message
 * - JSON of partitioned message
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("clientConnections", (table) => {
        table.increments("signer_id").primary(); // Sets client_id as the primary key
        table.string("signer_address");
        table.string("signed_message");
        table.json("message_data");
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("clientConnections");
};
