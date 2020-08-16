//Import Required Libraries
const express = require('express')
const router = express.Router()

//Import controller
const StudentController = require('../controllers/students')

//Import and require Passport
const passport = require("passport");
require("./../middlewares/passport")(passport);

//Create Student route
router.post('/student', StudentController.createStudent)

//Get all schools in database
router.get('/students', StudentController.getAll);


