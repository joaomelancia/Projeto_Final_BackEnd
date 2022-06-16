// ==== Model and Mongoose
const Section = require("./../models/sectionModel.js");
const mongoose = require("mongoose");



exports.allSections = async (req, res) => {
    const allSections = await Section.find();
    console.log({
        'status' : 'success',
        'data' : allSections
    });
    res.send(allSections);
};

exports.createSection = async (req, res) => {
    try{
        const section = await Section.create({
            name : req.body.name,
            reports_on : req.body.reports_on,
            number_of_workers : req.body.number_of_workers,
            alloted_parking_space : req.body.alloted_parking_space,
            section_email : req.body.section_email,
        });
        res.status(201).json(section);
    }
    catch (err) { console.log(err.message)};
};

exports.getSection = async (req,res) => {
    const sectionId = req.params._id;
    const section = await Section.findById(sectionId);
    res.send({data: section});
};
 
exports.updateSection = async (req, res) => {
    try{
        const sectionId = req.params._id;
        const section = await Section.findById(sectionId);
        Object.assign(section, req.body);
        section.save();
        res.send({ data: section });
    }catch (e){
        console.log(e.message);
        res.status(404).send({ error: 'This Section does not exist' });
    }
};
  
exports.deleteSection = async ( req, res) => {
    try{ 
        const sectionId = req.params._id;
        const section = await Section.findById(sectionId);
        console.log(section);
        section.delete(); 
        res.status(200).send( `The Section ${section.name} was deleted from the DataBase` );
    }catch (e){
        console.log(e.message);
        res.status(404).send({ error: 'Section not found' });
    }
}

  