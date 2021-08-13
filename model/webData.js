const mongoose = require("mongoose")
const { v4: uuid } = require('uuid');
const timeZone = require("mongoose-timezone")
const webDataSchema = new mongoose.Schema({
    onlyTextData: {
        type: String,
        require: true,
        transform: true,
        flattenDecimals: true
    },
    includeImageData: {
        type: String,
        require: true,
        transform: true,
        flattenDecimals: true
    }
}, {
    versionKey: false
})


const webData = mongoose.model("WebData", webDataSchema);


module.exports = { webData };