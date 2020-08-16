const routes = require('express').Router()


//Import all routes
const userRoutes = require('./user')
const schoolRoutes = require('./school')

// const inquilabRoutes = require('./inquilab')
// const studentRoutes = require('./student')
// const teamRoutes = require('./team')
// const classObservationRoutes = require('./classObservation')
// const unitEvalutationRoutes = require('./unitEvalutation')
// const teacherRoutes = require('./teacher')
// const studentTeacher = require('./studentTeacher')

//Combine routes
routes.use(userRoutes)
routes.use(schoolRoutes)

// routes.use(inquilabRoutes)
// routes.use(studentRoutes)
// routes.use(teamRoutes)
// routes.use(classObservationRoutes)
// routes.use(unitEvalutationRoutes)
// routes.use(teacherRoutes)
// routes.use(studentTeacher)



//Export all routes
module.exports = routes