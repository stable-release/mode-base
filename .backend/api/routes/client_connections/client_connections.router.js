const router = require("express").Router();
const cors = require("cors");
const methodNotAllowed = require("../errors/methodNotAllowed");

const cors_POST = cors({ methods: "POST" });

router.route("/").all(methodNotAllowed);
router.route("/new_connection").all(methodNotAllowed);

module.exports = router;