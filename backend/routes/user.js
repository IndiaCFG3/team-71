//Import Required Libraries
const express = require('express')
const router = express.Router()

//Import controller
const UserController = require('../controllers/users')

//Import and require Passport
const passport = require("passport");
require("./../middlewares/passport")(passport);

//Login route
router.post('/login',UserController.login);

//Create User Route
router.post('/register', UserController.register);

//Get all users in database
router.get('/users', UserController.getAll);

// Get the current user detail
// To check the user auth
router.get('/user/current', passport.authenticate("jwt",{session:false}), UserController.getCurrent)

// Update a user's details
router.patch('/user',passport.authenticate("jwt",{session:false}), UserController.update);

// Delete a user
router.delete('/user',passport.authenticate("jwt",{session:false}), UserController.delete); 


//Export User Route
module.exports = router


/*
schools- create,getAll, get school by id,update school                ---Anuj

students- create, getAllStudents,           ----Rohit


teams- create team(sending student ids),update team,getTeam,getTeam  ----------Rohan

inquilab-create,update(by id),read                                      ---------Anuj

ClassObservation- Create,edit(2types- student, student-teacher)         -----Rohan
UnitEvaluation- Create,edit                                  -----------Anuj

student-teacher- create,read, update               ----Rohit

teacher- create,read,update                    ---Rohit


*/