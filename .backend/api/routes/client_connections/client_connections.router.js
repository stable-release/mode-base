const router = require("express").Router();
const controller = require("./client_connections.controller");
const cors = require("cors");
const methodNotAllowed = require("../errors/methodNotAllowed");

const cors_POST = cors({ methods: "POST" });

router.route("/").all(methodNotAllowed);
router.route("/create").post(cors_POST, controller.create).options(cors_POST).all(methodNotAllowed);

module.exports = router;