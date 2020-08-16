//Import Model
const Team = require('./../models/Team')

exports.createTeam = async function(newTeam) {

    try{
        const team = Team.create(newTeam)
        return team;
    }
    catch(e){
        console.log(e)
        return e;
    }

}

exports.updateTeam = async function(updateTeam) {

    try{
        const team = Team.findOneAndUpdate(
            {_id:updateTeam.id},
            updateTeam,
            {new:true,omitUndefined:true})
        return team;
    }
    catch(e){
        console.log(e)
        return e;
    }

}

exports.getAll = async function() {

    try{
        const teams = Team.find({})
        return teams;
    }
    catch(e){
        console.log(e)
        return e;
    }

}


exports.getTeachersTeams = async function(teacherId) {

    try{
        const teams = Team.findAll({teacher:teacherId})
        return teams;
    }
    catch(e){
        console.log(e)
        return e;
    }

}