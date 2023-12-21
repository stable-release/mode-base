const price_feeds_service = require("./price_feeds.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

/**
 * Lists all available price feeds
 */
async function list(req, res, next) {
    const data = await price_feeds_service.list();
    res.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(list)
}