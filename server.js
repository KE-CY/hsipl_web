const app = require("./app")
const connectDb = require("./server/db")
connectDb();
app.listen(5000, "0.0.0.0", () => console.log("server is running."))