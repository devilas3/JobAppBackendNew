require("dotenv").config();
const connectDB = require("./db/connect");
const JobModel = require("./models/job");
const jobJSON = require("./jobs.json");


const start = async () => {

    try {
        await connectDB(process.env.MONGODB_URI)
        //to delete old JSON data uncomment below line
        //await JobModel.deleteMany();

        await JobModel.create(jobJSON);
        console.log("Your Data updated");
    }catch (error){
        console.log(error);
    }
};

start();
