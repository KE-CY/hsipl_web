const express = require("express");
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const includeImageDataController = require("../controller/includeImg");
router.post('/upload', upload.single('profile'), (req, res) => {
    try {
        res.send(req.file);
    } catch (err) {
        res.send(400);
    }
});

module.exports = router;