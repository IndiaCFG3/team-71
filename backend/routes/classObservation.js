//Import Required Libraries
const express = require('express')
const router = express.Router()

//Import controller
const ClassObservationController = require('../controllers/classObservation')

//Import and require Passport
const passport = require("passport");
require("./../middlewares/passport")(passport);

//Create school Route
router.post('/classObservation', ClassObservationController.create);

router.patch('/classObservation/student', ClassObservationController.updateCOS);

router.patch('/classObservation/studentTeacher', ClassObservationController.updateCOST);

//Export User Route
module.exports = router