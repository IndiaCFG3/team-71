//Import Required Libraries
const express = require('express')
const router = express.Router()

//Import controller
const SchoolController = require('../controllers/schools')

//Import and require Passport
const passport = require("passport");
require("./../middlewares/passport")(passport);

//Create school Route
router.post('/school_create', SchoolController.createSchool);

//Get all schools in database
router.get('/school_getall', SchoolController.getAll);

//Get school by user ID
router.get('/school_by_id/:id',SchoolController.getSchoolById);

//Update school
router.patch('/school_update/:id',SchoolController.updateSchool);

router.get('/schools/:id', SchoolController.findById);


//Export User Route
module.exports = router