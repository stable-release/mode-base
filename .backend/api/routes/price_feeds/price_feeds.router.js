const router = require("express").Router();
const controller = require("./price_feeds.controller");
const cors = require("cors");
const methodNotAllowed = require("../errors/methodNotAllowed");

const cors_get = cors({ methods: "GET" });

router.route("/").all(methodNotAllowed);
router.route("/list").get(cors_get, controller.list).all(methodNotAllowed);

module.exports = router;