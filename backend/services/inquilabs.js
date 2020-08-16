//Import Model
const Inquilab = require('../models/Inquilab')

exports.createInquilab = async function(newInquilab) {

    try{
        const inquilab = Inquilab.create({
            school: newInquilab.school,
            name: newInquilab.name,
            address: newInquilab.address,
            email: newInquilab.email,
            password: newInquilab.password,
            aadharcard: newInquilab.aadharcard,
            teachers: newInquilab.teachers,
        });
        return inquilab;
    }
    catch(e){
        console.log(e);
        return e;
    }

}

exports.getAll = async function() {

    try{
        const inquilabs = Inquilab.find({})
        return inquilabs;
    }
    catch(e){
        console.log(e)
        return e;
    }

}

/*
exports.getInquilabById = async function(id){
    try{
        const school = Inquilab.findById(id);

        return res.status(200).json(school);
    }
    catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}
*/
exports.updateInquilab = async function (id,updateInquilab) {
    try{
        const inquilab = Inquilab.findByIdAndUpdate(id,updateInquilab,{new : true,omitUndefined: true});

        const updatedInquilab = await InquilabService.updateSchool(id,updateInquilab);

        return res.status(200).json(updatedInquilab);
    }
    catch(errors){
        return res.status(400).json(errors);
    }
}