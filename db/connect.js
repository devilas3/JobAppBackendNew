const mongoose = require("mongoose");

const connectDB = (uri) => {
    console.log("You are connected to DB");
    return mongoose.connect(uri);
}


module.exports = connectDB;