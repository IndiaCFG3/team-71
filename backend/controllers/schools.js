// Import User Services
const SchoolService = require('./../services/schools');


exports.createSchool =async function(req,res,next){

    try{
        const newSchool = {
            inquilab: req.body.inquilab,
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            principalName: req.body.principalName,

        }

        const school = await SchoolService.createSchool(newSchool);

        return res.status(200).json(school);

    }catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}

exports.getAll = async function(req,res,next) {
    try{
        const schools = await SchoolService.getAll();

        return res.status(200).json(schools)
    }catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}

exports.getSchoolById = async function(req,res,next){
    try{
        const school = await SchoolService.getSchoolById(req.params.id);

        return res.status(200).json(school);
    }
    catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}

exports.updateSchool = async function (req,res,next) {
    try{
        const updateSchool = {
            id:req.params.id,
            name: req.body.name ,
            inquilab: req.body.inquilab,
            address: req.body.address,
            principalName: req.body.principalName,
            email: req.body.email
        }

        const school = await SchoolService.updateSchool(updateSchool)

        return res.status(200).json(school)
    }
    catch(errors){
        return res.status(400).json(errors)
    }
}