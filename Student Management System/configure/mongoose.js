const mongoose = require("mongoose");

// Configuring Mongodb atlas
const DB =
  "mongodb+srv://priyanshichauhanx06:priyanshi@cluster2.lk3midl.mongodb.net/?retryWrites=true&w=majority"

// Connecting to Mongodb
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected");
}).catch((err) => {
    console.log("Not Connected / Error");
    console.log(err);
})