class errorHandler {
    infoErr() {
        return{
            statusCode:400,
            msg:'your info is wrong',
        };
    }
}

module.exports = new errorHandler();