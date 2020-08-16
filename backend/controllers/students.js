const StudentService = require('./../services/students');


exports.createStudent =async function(req,res,next){

    try{
        const newStudent = {
            
            name: req.body.name,
            rollno: req.body.rollno,
            team: req.body.team,
            teacher : req.body.teacher,
            classObservation: req.body.classObservation
            
        }

        const student = await StudentService.createStudent(newStudent);

        return res.status(200).json(student);

    }catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}

exports.getAll = async function(req,res,next) {
    try{
        const students = await StudentService.getAll();

        return res.status(200).json(students)
    }catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}