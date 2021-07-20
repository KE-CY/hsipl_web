class errorHandler {
    returnErrorMsg(statusCode,msg){
        return{
            statusCode:Number(statusCode),
            msg:String(msg),
        };
    }
    infoErr() {
        this.returnErrorMsg(400,"your info is wrong.");
    }
    userAlreadyExist() {
        this.returnErrorMsg(409,"user already exist.");
    }
    userNotExist() {
        this.returnErrorMsg(404,"user not exist.");
    }
    loginError() {
        this.returnErrorMsg(400,"username or password is wrong.");
    }
    tokenError() {
        this.returnErrorMsg(401,"token wrong,please login again.");
    }
    accessError() {
        this.returnErrorMsg(400,"access error.");
    }
    ipError(){
        this.returnErrorMsg(400,"Authentication failed.");
    }
}

module.exports = new errorHandler();