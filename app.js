const express = require('express');
const bodyparser = require('body-parser');
const experienceRoute = require("./router/experience")
const apiErrorHandler = require("./middleware/api-errorHandler")
// const cors = require('cors');

const app = express();
// app.use(cors());
app.use(bodyparser.json())
app.get('/', (req, res) => {
    res.status(202).send(`歡迎光臨`);
  });
app.use("/api/experience", experienceRoute)
app.use(apiErrorHandler);

module.exports = app;