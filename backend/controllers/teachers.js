const TeacherService = require('./../services/teachers');


exports.createTeacher =async function(req,res,next){

    try{
        const newTeacher = {
            
            name: req.body.name,
            school: req.body.school,
            email: req.body.email,
            students : req.body.students,
            password: req.body.password
            
        }

        const teacher = await TeacherService.createTeacher(newTeacher);

        return res.status(200).json(teacher);

    }catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}

exports.getAll = async function(req,res,next) {
    try{
        const teachers = await TeacherService.getAll();

        return res.status(200).json(teachers)
    }catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}

exports.updateTeacher = async function(req,res,next) {
    try{
        const teachers = await TeacherService.updateTeacher();

        return res.status(200).json(teachers)
    }catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}