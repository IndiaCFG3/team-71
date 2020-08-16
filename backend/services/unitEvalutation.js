const UnitEvaluation = require('./../models/UnitEvaluation')

exports.create = async function(newCO) {

    try{
        const ET = UnitEvaluation.create(ET)
        return ET;
    }
    catch(e){
        console.log(e)
        return e;
    }

}

exports.updateUET = async function(updateET) {

    try{
        const ET = UnitEvaluation.findOneAndUpdate(
            {_id:updateET.id},
            updateET,
            {new:true,omitUndefined:true})
        return ET;
    }
    catch(e){
        console.log(e)
        return e;
    }

}

