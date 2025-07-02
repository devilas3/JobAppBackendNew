const mongoose = require("mongoose");


const jobScheme = new mongoose.Schema({
    jobTitle: {
        type:String,
        required: [true, "Job title must be provided"],
    },
    
  sector: { 
    type: String, 
    enum: {
        values:['govt', 'private'],
        message:`{VALUE} is not supported`,
        },
    },
  category: {
        type:String,
        required: false
    },
  location: {
        type:String,
        required: false
    },
  expiryDate: Date,
  postUrl: {
        type:String,
        required: true
    },
  postedOn: { type: Date, default: Date.now },
  isActive: {
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model('Job',jobScheme);