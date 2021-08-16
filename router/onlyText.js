const express = require("express");
const router = express.Router();
const onlyTextController = require("../controller/onlyText");
router.put("/:objectKey", onlyTextController.update);
router.post("/:objectKey", onlyTextController.create);
router.get("/", onlyTextController.get);
module.exports = router;
