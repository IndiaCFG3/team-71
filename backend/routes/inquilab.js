//Import Required Libraries
const express = require('express')
const router = express.Router()

//Import controller
const InquilabController = require('../controllers/inquilab')

//Import and require Passport
const passport = require("passport");
require("./../middlewares/passport")(passport);

//Create school Route
router.post('/inquilab_create', InquilabController.createInquilab);

//Get all schools in database
router.get('/inquilab_getall', InquilabController.getAll);

//Get school by user ID
//router.get('/inquilab_by_id/:id',SchoolController.getSchoolById);

//Update school
router.put('/inquilab_update/:id',InquilabController.updateInquilab);


//Export User Route
module.exports = router