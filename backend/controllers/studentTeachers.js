const StudentTeacherService = require('./../services/studentTeachers');


exports.createStudentTeacher =async function(req,res,next){

    try{
        const newStudentTeacher = {
            
            name: req.body.name,
            classObservation: req.body.classObservation,
            password: req.body.password,
            phone : req.body.phone,
            email : req.body.email,
            class : req.body.class

            
        }

        const studentTeacher = await StudentTeacherService.createStudentTeacher(newStudentTeacher);

        return res.status(200).json(studentTeacher);

    }catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}

exports.getAll = async function(req,res,next) {
    try{
        const studentTeachers = await StudentTeacherService.getAll();

        return res.status(200).json(studentTeachers)
    }catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}

exports.updateStudentTeacher = async function(req,res,next) {
    try{
        const studentTeachers = await StudentTeacherService.updateStudentTeacher();

        return res.status(200).json(studentTeachers)
    }catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}



