const routes = require('express').Router()


//Import all routes
const userRoutes = require('./user')
const schoolRoutes = require('./school')


//Combine routes
routes.use(userRoutes)
routes.use(schoolRoutes)



//Export all routes
module.exports = routes