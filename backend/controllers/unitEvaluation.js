// Import User Services
const UnitEvaluationService = require('./../services/unitEvaluation');


exports.create = async function(req,res,next){

    try{
        const newET = {
            team: req.body.team,
            imageURL: req.body.imageURL,
            ideas: req.body.ideas,
            plan:req.body.plan,
            makeTest: req.body.makeTest,
            presentation: req.body.presentation,
            present: req.body.present,
            comments: req.body.comments
        }

        const ET = await UnitEvaluationService.create(newET);
        return res.status(200).json(ET);
    }
    catch(e){
        console.log(e)
        return res.status(400).json(e);
    }


}


exports.updateUET = async function(req,res,next){

    try{
        const updateET = {
            team: req.body.team,
            imageURL: req.body.imageURL,
            ideas: req.body.ideas,
            plan:req.body.plan,
            makeTest: req.body.makeTest,
            presentation: req.body.presentation,
            present: req.body.present,
            comments: req.body.comments
        }
        const ET = await UnitEvaluationService.updateUET(updateET);
        return res.status(200).json(ET);
    }
    catch(e){
        console.log(e)
        return res.status(400).json(e);
    }


}
