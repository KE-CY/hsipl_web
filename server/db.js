const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const connectDb = async () => {
    try {
        const mongodb_url = process.env.MONGODB_URL;
        const conn = await mongoose.connect(mongodb_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        console.log(mongodb_url);
        console.log(`mongodb connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDb