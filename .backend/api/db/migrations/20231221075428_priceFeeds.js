/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("priceFeeds", (table) => {
        table.increments("feed_id").primary();
        table.string("feed_name");
        table.string("aggregator_address");
        table.string("token_address");
        table.string("image_url");
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("priceFeeds");
};
