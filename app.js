const express = require('express');
const bodyparser = require('body-parser');
const onlyTextRoute = require("./router/onlyText")
const webDataRoute = require("./router/webData")
const includeImgRoute = require("./router/includeImg");
const apiErrorHandler = require("./middleware/api-errorHandler")
// const cors = require('cors');

const app = express();
// app.use(cors());
app.use(bodyparser.json())
app.use("/api/webdata", webDataRoute)
app.use("/api/onlytext", onlyTextRoute)
app.use("/api/includeimg",includeImgRoute)
app.use(apiErrorHandler);

module.exports = app;