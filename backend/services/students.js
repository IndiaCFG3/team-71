//Import Model
const Student = require('./../models/Student')

exports.createStudent = async function(newStudent) {

    try{
        const student = Student.create({
            name: newStudent.name,
            rollno: newStudent.rollno,
            team: newStudent.team,
            teacher : newStudent.teacher,
            classObservation: newStudent.classObservation
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