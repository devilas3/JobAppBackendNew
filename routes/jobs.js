const express = require('express');
const router = express.Router();
const {getjobs, getalljobs, getfilteredjobs,getallgovtjobs,getallprivatejobs,getallprivatejobswithpagination, 
        getallgovtjobswithpagination, 
        getalljobswithpagination} = require("../controllers/jobs")

        

router.route('/').get(getjobs);
router.route('/getalljobs').get(getalljobs);
router.route('/getfilteredjobs').get(getfilteredjobs);
router.route('/getallgovtjobs').get(getallgovtjobs);
router.route('/getallprivatejobs').get(getallprivatejobs);
router.route('/getalljobswithpagination').get(getalljobswithpagination);
router.route('/getallgovtjobswithpagination').get(getallgovtjobswithpagination);
router.route('/getallprivatejobswithpagination').get(getallprivatejobswithpagination);

module.exports = router;
