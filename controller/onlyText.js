const errorHandler = require("../middleware/errorHandler");
const testData = require("../data.json");
const { distinguish: distinguish } = require("../utils/compare");
const { onlyText, Experience } = require("../model/onlyText");
const dynamicClass = require("../utils/model");
async function getData() {
    return await testData;
}
class onlyTextController {
    async create(req,res,next){
        
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
            const subData = await distinguish(req.body); // client 收取到的資料
            const create = subData.create;
            const updata = subData.updata;
            const newClass = dynamicClass(objectKey);
            const moduleClass = new newClass();
            const keylist = Object.keys(moduleClass);
            const createMethod = moduleClass.create.bind(moduleClass);
            const updateMethod = moduleClass.update.bind(moduleClass);
            const deleteMethod = moduleClass.delete.bind(moduleClass);



            console.log(subData);


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
}
module.exports = new onlyTextController();
