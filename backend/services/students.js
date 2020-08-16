//Import Model
const Student = require('./../models/Student')

exports.createStudent = async function(newStudent) {

    try{
        const student = Student.create({
            name: req.body.name,
            rollno: req.body.rollno,
            team: req.body.team,
            teacher : req.body.teacher,
            classObservation: req.body.classObservation
        })
        return student;
    }
    catch(e){
        console.log(e)
        return e;
    }
}

exports.getAll = async function() {

    try{
        const students = Student.find({})
        return students;
    }
    catch(e){
        console.log(e)
        return e;
    }

}