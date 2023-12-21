const knex = require("../../db/connection");

/**
 * List
 * @returns {PriceFeeds[]} array of price feeds
 */
function list() {
    return knex("priceFeeds").select("*");
}

module.exports = {
    list,
}