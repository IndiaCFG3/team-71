//Import Model
const Teacher = require('./../models/Teacher')

exports.createTeacher = async function(newTeacher) {

    try{
        const teacher = Teacher.create({

            name: newTeacher.name,
            school: newTeacher.school,
            email: newTeacher.email,
            students : newTeacher.students,
            password: newTeacher.password
            
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
        const teachers = Teacher.find({})
        return teachers;
    }
    catch(e){
        console.log(e)
        return e;
    }

}
exports.updateTeacher = async function(id, updateTeacher) {

    try{
        const teacher = Teacher.findOneAndUpdate(
            {_id:id},
            updateTeacher,
            {new:true,omitUndefined:true})
        return teacher;
    }
    catch(e){
        console.log(e)
        return e;
    }

}