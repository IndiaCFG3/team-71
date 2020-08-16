//Import Model
const School = require('./../models/School')

exports.createSchool = async function(newSchool) {

    try{
        const school = School.create({
            name:newSchool.name,
            email:newSchool.email,
            principalName:newSchool.principalName,
            address: newSchool.address,
            inquilab:newSchool.inquilab
        })
        return school;
    }
    catch(e){
        console.log(e)
        return e;
    }
}

exports.getAll = async function() {

    try{
        const schools = School.find({})
        return schools;
    }
    catch(e){
        console.log(e)
        return e;
    }

}

exports.getSchoolById = async function(id){
    try{
        const school = School.findById(id);

        return res.status(200).json(school);
    }
    catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}

exports.updateSchool = async function (updateSchool) {
    try{
        const school = School.findOneAndUpdate({_id:updateSchool.id},updateSchool,{new : true,omitUndefined: true});

        return school
    }
    catch(errors){
        return res.status(400).json(errors)
    }
}





exports.getById = async function(id) {

    try{
        const school = await School.findById(id)
        return school;
    }
    catch(e){
        console.log(e)
        return e;
    }

}



