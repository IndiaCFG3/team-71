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