const errorHandler = require("../middleware/errorHandler");
const testData = require("../data.json");
const { distinguish: distinguish } = require("../utils/compare");
const { onlyText } = require("../model/onlyText");
const dynamicClass = require("../utils/model");
async function getData() {
    return await testData;
}
class onlyTextController {
    async create(req, res, next) {
        try {
            const objectKey = req.params.objectKey; //client要更新的資料
            if (!objectKey) {
                return next(errorHandler.infoErr());
            }
            const masterData = await testData; // 獲取最新資料
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
            console.log(JSON.stringify(masterData));

            // 將masterData 轉成 string 存到資料庫 

            res.status(200).json({
                msg: 'success'
            });

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
            const masterData = await testData; // 獲取最新資料
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


            res.status(200).json({
                msg: 'success'
            });
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
