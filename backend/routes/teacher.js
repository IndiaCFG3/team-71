//Import Required Libraries
const express = require('express')
const router = express.Router()

//Import controller
const TeacherController = require('../controllers/teachers')

//Import and require Passport
const passport = require("passport");
require("./../middlewares/passport")(passport);

//Create Student route
router.post('/teacher', TeacherController.createStudent);

//Get all teachers in database
router.get('/teachers', TeacherController.getAll);

//Update
router.get('/updateTeacher', TeacherController.updateTeacher);


module.exports = router