const express = require('express');
const bodyparser = require('body-parser');
const userRoute = require("./router/user");
// const cors = require('cors');

const app = express();
// app.use(cors());
app.use(bodyparser.json())
app.use("/api/user",userRoute)


module.exports = app;