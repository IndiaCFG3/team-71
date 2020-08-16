//Import Required Libraries
const express = require('express')
const router = express.Router()

//Import controller
const SchoolController = require('../controllers/schools')

//Import and require Passport
const passport = require("passport");
require("./../middlewares/passport")(passport);

//Create school Route
router.post('/school', SchoolController.createSchool);

//Get all schools in database
router.get('/schools', SchoolController.getAll);




//Export User Route
module.exports = router