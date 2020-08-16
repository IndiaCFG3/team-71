// Import User Services
const ClassObservationService = require('./../services/classObservation');


exports.create = async function(req,res,next){

    try{
        const newCO = {
            studentTeacher: req.body.studentTeacher,
            student: req.body.student,
            imageURL: req.body.imageURL,
            leadership: req.body.leadership,
            mentorship: req.body.mentorship
            // This will be an array
        }
        console.log(newCO)
        const CO = await ClassObservationService.create(newCO);
        return res.status(200).json(CO);
    }
    catch(e){
        console.log(e)
        return res.status(400).json(e);
    }


}


exports.updateCOS = async function(req,res,next){


    try{
        const updateCO = {
            student: req.body.student,
            imageURL: req.body.imageURL,
            leadership: req.body.leadership,
            mentorship: req.body.mentorship,
            id:req.params.id
            // This will be an array
        }
        const CO = await ClassObservationService.updateCOS(updateCO);
        return res.status(200).json(CO);
    }
    catch(e){
        console.log(e)
        return res.status(400).json(e);
    }


}

exports.updateCOST = async function(req,res,next){

    try{
        const updateCO = {
            studentTeacher: req.body.studentTeacher,
            imageURL: req.body.imageURL,
            leadership: req.body.leadership,
            mentorship: req.body.mentorship,
            id:req.params.id
            // This will be an array
        }
        const CO = await ClassObservationService.updateCOST(updateCO);
        return res.status(200).json(CO);
    }
    catch(e){
        console.log(e)
        return res.status(400).json(e);
    }


}