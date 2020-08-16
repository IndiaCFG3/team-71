// Import User Services
const InquilabService = require('./../services/inquilabs.js');
const Inquilab = require('../models/Inquilab.js');


exports.createInquilab =async function(req,res,next){

    try{
        const newInquilab = {
            school: req.body.school,
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            password: req.body.password,
            aadharcard: req.body.aadharcard,
            teachers: req.body.teachers,
        }

        const inquilab = await InquilabService.createInquilab(newInquilab);

        return res.status(200).json(inquilab);

    }catch(e){
        console.log(e)
        return res.status(400).json(e);
    }
}

exports.getAll = async function(req,res,next) {
    try{
        const inquilabs = await InquilabService.getAll();

        return res.status(200).json(inquilabs);
    }
    catch(e){
        console.log(e);
        return res.status(400).json(e);
    }
}


exports.updateInquilab = async function (req,res,next) {
    try{
        const id = req.params.id;
        const updateInquilab = {
            school: req.body.school,
            name: req.body.name,
            address: req.body.address ? req.body.address : req.inquilab.address,
            email: req.body.email ?req.body.email :req.inquilab.email,
            password: req.body.password? req.body.password : req.inquilab.password,
            aadharcard: req.body.aadharcard ? req.body.aadharcard : req.inquilab.aadharcard,
            teachers: req.body.teachers ? req.body.teachers : req.inquilab.teachers,
        }
        const updatedInquilab = await InquilabService.updateSchool(id,updateInquilab);

        return res.status(200).json(updatedInquilab);
    }
    catch(errors){
        return res.status(400).json(errors);
    }
}