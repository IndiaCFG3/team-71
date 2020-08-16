// Import User Services
const TeamService = require('./../services/teams');


exports.createTeam =async function(req,res,next){

    try{
        const newTeam = {
            name: req.body.name,
            students: req.body.students 
            // This will be an array
        }
        const team = await TeamService.createTeam(newTeam);
        return res.status(200).json(team);
    }
    catch(e){
        console.log(e)
        return res.status(400).json(e);
    }


}


exports.updateTeam =async function(req,res,next){

    try{
        const updateTeam = {
            id:req.body.id,
            name: req.body.name,
            students: req.body.students ,
            // This will be an array
            unitEvaluation: req.body.unitEvaluation
        }
        const team = await TeamService.updateTeam(updateTeam);
        return res.status(200).json(team);
    }
    catch(e){
        console.log(e)
        return res.status(400).json(e);
    }


}

exports.getAll = async function(req,res,next){

    try{

        const teams = await TeamService.getAll();

        return res.status(200).json(teams);

    }catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}

exports.getTeachersTeams = async function(req,res,next){

    try{

        const teams = await TeamService.getTeachersTeams(req.params.teacherId);

        return res.status(200).json(teams);

    }catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}

exports.getTeamById = async function(req,res,next){

    try{

        const team = await TeamService.getTeamById(req.params.id);

        return res.status(200).json(team);

    }catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}