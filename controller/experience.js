const errorHandler = require("../middleware/errorHandler");
const experienceModel = require("../model/experience");
class experienceController {
    async create(req, res, next) {
        const { types, years, institutionName, position, major } = req.body;
        console.log(req.body)
        if (!types || !years || !institutionName || !position || !major) {
            return next(errorHandler.infoErr());
        }
        const createExperience = await experienceModel.create({
            types: types,
            years: years,
            institutionName: institutionName,
            position: position,
            major: major,
        })
        if (createExperience) {
            res.status(201).json({
                id: createExperience._id
            });
        }
    }
}
module.exports = new experienceController();