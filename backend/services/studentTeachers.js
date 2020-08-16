//Import Model
const StudentTeacher = require('./../models/StudentTeacher')

exports.createStudentTeacher = async function(newStudentTeacher) {

    try{
        const teacher = StudentTeacher.create({
            
            name: newStudentTeacher.name,
            classObservation: newStudentTeacher.classObservation,
            password: newStudentTeacher.password,
            phone : newStudentTeacher.phone,
            email : newStudentTeacher.email,
            class : newStudentTeacher.class
            
        })
        return teacher;
    }
    catch(e){
        console.log(e)
        return e;
    }
}

exports.getAll = async function() {

    try{
        const teachers = StudentTeacher.find({})
        return teachers;
    }
    catch(e){
        console.log(e)
        return e;
    }

}

exports.updateStudentTeacher = async function(id, updateStudentTeacher) {

    try{
        const studentTeacher = StudentTeacher.findOneAndUpdate(
            {_id:id},
            updateStudentTeacher,
            {new:true,omitUndefined:true})
        return studentTeacher;
    }
    catch(e){
        console.log(e)
        return e;
    }

}