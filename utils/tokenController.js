const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config();
const errorHandler = require("../middleware/errorHandler");
class TokenController {
    async signToken(payload) {
        const token = await jwt.sign(payload, process.env.JWTSECRET, {
            expiresIn: "1d",
        });
        return token;
    }
    async verifyToken(req, res, next) {
        const token = req.headers.Authorization
        if (!token) {
            return next(errorHandler.tokenError())
        }
        const rtoken = token.replace('Bear', '')
        try {
            const result = await jwt.verify(rtoken, process.env.JWTSECRET);
            req.user = result
        } catch (error) {
            return next(errorHandler.tokenError());
        }
    }
}