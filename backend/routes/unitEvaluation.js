//Import Required Libraries
const express = require('express')
const router = express.Router()

//Import controller
const UnitEvaluationController = require('../controllers/unitEvaluation')

//Import and require Passport
const passport = require("passport");
require("./../middlewares/passport")(passport);

//Create school Route
router.post('/unitEvaluation', UnitEvaluationController.create);

router.patch('/unitEvaluation/teams', UnitEvaluationController.updateUET);

//Export User Route
module.exports = router