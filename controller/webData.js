const errorHandler = require("../middleware/errorHandler");
const onlyTextData = require("../data.json");
const { webData } = require("../model/webData");

class webDataController {
    /* 資料庫初始化 */
    async init(req, res, next) {
        const masterData = onlyTextData;
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
}
module.exports = new webDataController();