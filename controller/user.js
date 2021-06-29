const { encrypt: encryptPassword, decrypt: decryptPassword } = require("../utils/encrypyPassword");
const errorHandler = require("../middleware/errorHandler");
class UserController {
    async register(req, res, next) {
        const { name, username, password } = req.body;
        if (!name || !username || !password) {
            return next(errorHandler.infoErr());
        }
        const ePassword = await encryptPassword(password);
        // 新增到資料庫
    }
    async login(req, res, next) {
        const { username, password } = req.body;
        if (!username || !password) {
            return next(errorHandler.infoErr());
        }
    }
}
module.exports = new UserController();