const ClassObservation = require('./../models/ClassObservation')

exports.create = async function(newCO) {

    try{
        const CO = ClassObservation.create(newCO)
        return CO;
    }
    catch(e){
        console.log(e)
        return e;
    }

}

exports.updateCOS = async function(updateCO) {

    try{
        const CO = ClassObservation.findOneAndUpdate(
            {_id:updateCO.id},
            updateCO,
            {new:true,omitUndefined:true})
        return CO;
    }
    catch(e){
        console.log(e)
        return e;
    }

}


exports.updateCOST = async function(updateCO) {

    try{
        const CO = ClassObservation.findOneAndUpdate(
            {_id:updateCO.id},
            updateCO,
            {new:true,omitUndefined:true})
        return CO;
    }
    catch(e){
        console.log(e)
        return e;
    }

}