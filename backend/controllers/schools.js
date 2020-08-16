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