const errorHandler = require("../middleware/errorHandler");
const testData = require("../data.json");
const dotenv = require("dotenv")
const { distinguish: distinguish } = require("../utils/compare");
const { webData } = require("../model/webData");
const dynamicClass = require("../utils/model");
async function getData() {
    return await testData;
}
class onlyTextController {
    async get(req, res, next) {
        try {
            const { type } = req.query;
            let masterData = await webData.findById({ _id: process.env.MONGODB_ID }).select("onlyTextData -_id"); // 資料庫搜尋資料(要string 轉json)           
            masterData = JSON.parse(masterData.onlyTextData);
            if (!masterData) {
                return next(errorHandler.dataNotFind());
            }
            const keys = Object.keys(masterData);
            if (!keys.includes(type)) {
                return next(errorHandler.dataNotFind());
            }
            let master;
            if (!type) {
                master = masterData;
            } else {
                master = masterData[type];
            }
            res.status(201).json({
                msg: 'success',
                data: master
            });
        } catch (error) {
            res.status(404).json({
                msg: error
            });
        }
    }
    /* 資料庫初始化 */
    async init(req, res, next) {
        const masterData = testData;
        try {
            const createData = await webData.create({
                onlyTextData: JSON.stringify(masterData),
                includeImageData: ""
            })
            if (createData) {
                res.status(200).json({
                    msg: 'success'
                });
            }
        } catch (error) {
            res.status(404).json({
                msg: error
            });
        }
    }
    async create(req, res, next) {
        try {
            const objectKey = req.params.objectKey; //client要更新的資料
            if (!objectKey) {
                return next(errorHandler.infoErr());
            }
            let masterData = await webData.findById({ _id: process.env.MONGODB_ID }).select("onlyTextData -_id")// 獲取最新資料
            masterData = JSON.parse(masterData.onlyTextData);
            if (!masterData) {
                return next(errorHandler.dataNotFind());
            }
            const subData = req.body;
            const newClass = dynamicClass(objectKey);
            const moduleClass = new newClass();
            const keylist = Object.keys(moduleClass);

            subData.forEach(val => {
                const createData = new newClass();
                const createMethod = moduleClass.create.bind(createData);
                keylist.forEach(key => {
                    if (val[key] != undefined || val[key] != null) {
                        createData[key] = val[key];
                    } else if (key != 'createAT' && key != 'updateAT' && key != 'isDelete') {
                        createData[key] = null;
                    }
                });
                createMethod();
                masterData[objectKey].push(createData);
            });
            JSON.stringify(masterData);
            const newOnlyText = await webData.findByIdAndUpdate({
                _id: id,
            }, {
                onlyTextData: JSON.stringify(masterData)
            })
            // 將masterData 轉成 string 存到資料庫 
            if (newOnlyText) {
                res.status(200).json({
                    msg: 'success',
                    data: masterData[objectKey]
                });
            } else {
                res.status(400).json({
                    msg: 'error'
                });
            }

        } catch (error) {
            res.status(404).json({
                msg: error
            });
        }
    }
    async update(req, res, next) {
        try {
            const objectKey = req.params.objectKey; //client要更新的資料
            if (!objectKey) {
                return next(errorHandler.infoErr());
            }
            let masterData = await webData.findById({ _id: process.env.MONGODB_ID }).select("onlyTextData -_id"); // 獲取最新資料
            masterData = JSON.parse(masterData.onlyTextData);
            if (!masterData) {
                return next(errorHandler.dataNotFind());
            }
            const master = masterData[objectKey];
            const subData = req.body // client 收取到的資料
            const newClass = dynamicClass(objectKey);
            const moduleClass = new newClass();
            const keylist = Object.keys(moduleClass);

            subData.forEach(val => {
                master.forEach(m => {
                    if (m.id == val.id) {
                        keylist.forEach(key => {
                            m[key] = val[key];
                        });
                        m.updateAT.push(new Date().toLocaleString());
                    }
                });
            });
            masterData[objectKey] = master;
            // 將masterData 轉成 string 存到資料庫 
            const updataOnlyText = await webData.findByIdAndUpdate({
                _id: id,
            }, {
                onlyTextData: JSON.stringify(masterData)
            })
            if (updataOnlyText) {
                res.status(200).json({
                    msg: 'success',
                    data: masterData[objectKey]
                });
            }
        }
        catch (error) {
            res.status(404).json({
                msg: error
            });
        }

    }
    async delete(req, res, nexr) {

    }
}
module.exports = new onlyTextController();
