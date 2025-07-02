const JobModel = require("../models/job");


const getjobs = async (req, res ) => {
    const MyJobData = await JobModel.find({});
    res.status (200).json({MyJobData});
};

const getalljobs = async (req, res ) => {
    const MyJobData = await JobModel.find({}).sort("-postedOn");
    res.status (200).json({msg:"Get all Job List", data: MyJobData, status:"Success"});
};

const getfilteredjobs = async (req, res ) => {
    const MyJobData = await JobModel.find(req.query).sort("-postedOn");
    console.log(req.query);
    res.status (200).json({msg:"Get filtered Job List", data: MyJobData, status:"Success"});
};

//Get all Private Jobs
const getallprivatejobs = async (req, res ) => {
    const MyJobData = await JobModel.find({sector:"private"}).sort("-postedOn");
    res.status (200).json({msg:"Get all Private Job List", data: MyJobData, status:"Success"});
};

//Get all Government Jobs
const getallgovtjobs = async (req, res ) => {
    const MyJobData = await JobModel.find({sector:"govt"}).sort("-postedOn");
    res.status (200).json({msg:"Get all Govenment Job List", data: MyJobData, status:"Success"});
};

//Get all Private Jobs with pagination
const getallprivatejobswithpagination = async (req, res ) => {
    // const MyJobData = await JobModel.find({sector:"private"}).sort("-postedOn");
    // res.status (200).json({msg:"Get all Private Job List", data: MyJobData, status:"Success"});

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 20;
    let skip = (page - 1) * limit ;

    let jobData = JobModel.find({sector:"private"}).sort("-postedOn")
    jobData = jobData.skip(skip).limit(limit);


    const MyJobData = await jobData;
    res.status (200).json({msg:"Get all Private Job List", data: MyJobData, status:"Success", nbHits: MyJobData.length});
};

//Get all Government Jobs with pagination
const getallgovtjobswithpagination = async (req, res ) => {
    // const MyJobData = await JobModel.find({sector:"govt"}).sort("-postedOn");
    // res.status (200).json({msg:"Get all Govenment Job List", data: MyJobData, status:"Success"});

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 20;
    let skip = (page - 1) * limit ;

    let jobData = JobModel.find({sector:"govt"}).sort("-postedOn")
    jobData = jobData.skip(skip).limit(limit);


    const MyJobData = await jobData;
    res.status (200).json({msg:"Get all Govenment Job List", data: MyJobData, status:"Success", nbHits: MyJobData.length});
};

//Get all  Jobs with pagination
const getalljobswithpagination = async (req, res ) => {
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 20;
    let skip = (page - 1) * limit ;

    let jobData = JobModel.find({}).sort("-postedOn")
    jobData = jobData.skip(skip).limit(limit);


    const MyJobData = await jobData;
    res.status (200).json({msg:"Get all Job List", data: MyJobData, status:"Success", nbHits: MyJobData.length});
};

module.exports = {getjobs, 
        getalljobs, 
        getfilteredjobs,
        getallgovtjobs,
        getallprivatejobs, 
        getallprivatejobswithpagination, 
        getallgovtjobswithpagination, 
        getalljobswithpagination};