const errorHandler = require("../middleware/errorHandler");
const testData = require("../data.json");
const { distinguish: distinguish } = require("../utils/compare");
const {
    onlyText, Experience, Research, Journal,
    Projects, Talks, Conference, ConferenceAbstract, Awards,
    ServiceInternationality, ServiceSpecialAgenda, ServiceAgendaChair,
    ServicePosterAgenda
} = require("../model/onlyText");
class onlyTextController {
    constructor() {
        // this.getData = JSON.parse(await onlyText.find({}));
        this.data = '';
    }
    async getData() {
        // const getData = await onlyText.find({});
        // getData = JSON.parse(getData);
        return testData;
    }
    async update(req, res, next) {
        const objectKey = req.params.objectKey;
        if (!objectKey) {
            return next(errorHandler.infoErr());
        }
        // console.log(this)
        // // this.getData()
        // const oldData = testData[objectKey];

        // const newData = req.body;
        // const distData = await distinguish(newData)
        // const createData = distData.create;
        // const updataData = distData.updata;
        // if (createData) {

        // }
        res.status(201).json({
            msg: "132"
        });
    }
}
module.exports = new onlyTextController();
