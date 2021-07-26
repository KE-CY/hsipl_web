const mongoose = require("mongoose")
const timeZone = require("mongoose-timezone");
const experienceSchema = new mongoose.Schema({
    types: {
        type: String,
        require: true,
    },
    years: {
        type: String,
        require: true,
    },
    institutionName: {
        type: Number,
        require: true,
    },
    position: {
        type: Date,
        requrie: true,
    },
    major: {
        type: String,
        require: true,
    },
    createAt: {
        type: String,
        require: true,
    },
    updateAt: {
        type: Array,
        require: true,
    },
    isDelete: {
        type: Boolean,
        require: true,
        default: false,
    },
    __v: {
        type: Number,
        default: 0,
    }
});
// 新增資料時，增加新增時間、更新時間
experienceSchema.pre("create", (next) => {
    this.createAt = new Date().toLocaleString();
    this.updateAt.push(new Date().toLocaleString());
    next();
});
/** 更新 */
experienceSchema.pre("###", (next) => {
    this._update["$push"] = { updatedAt: new Date().toLocaleString() };
    this.__v["$inc"] = 1
});

// experienceSchema.plugin(timeZone);
const experience = mongoose.model("Experience", experienceSchema);
module.exports = experience;