const express = require("express");
const router = express.Router();
const experienceController = require("../controller/experience");

router.post("/", experienceController.create);

module.exports = router;