const express = require("express");
const router = express.Router();
const webDataController = require("../controller/webData");

router.post("/", webDataController.init);
module.exports = router;