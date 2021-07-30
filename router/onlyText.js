const express = require("express");
const router = express.Router();
const onlyTextController = require("../controller/onlyText");
router.put("/:objectKey", onlyTextController.update);

module.exports = router;
