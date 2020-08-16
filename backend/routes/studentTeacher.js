//Import Required Libraries
const express = require('express')
const router = express.Router()

//Import controller
const StudentTeacherController = require('../controllers/studentTeachers')

//Import and require Passport
const passport = require("passport");
require("./../middlewares/passport")(passport);

//Create Student route
router.post('/studentTeacher', StudentTeacherController.createStudentTeacher);

//Get all schools in database
router.get('/studentTeachers', StudentTeacherController.getAll);

//Update
router.patch('/updateStudentTeacher/:id', StudentTeacherController.updateStudentTeacher);


module.exports = router