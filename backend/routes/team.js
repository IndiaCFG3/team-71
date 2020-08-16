//Import Required Libraries
const express = require('express')
const router = express.Router()

//Import controller
const TeamController = require('../controllers/teams')

//Create school Route
router.post('/team', TeamController.createTeam);

//Get all teams in database
router.get('/teams', TeamController.getAll);

//Get all teams within a teacher
router.get('/teams/:teacherId', TeamController.getTeachersTeams);

router.get('/team/:id',TeamController.getTeamById);

router.patch('/team/:id',TeamController.updateTeam);



module.exports = router