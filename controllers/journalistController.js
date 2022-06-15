// ==== Model and Mongoose
const Journalist = require("./../models/journalistModel.js");
const mongoose = require("mongoose");



exports.allJournalists = async (req, res) => {
    const allJournalists = await Journalist.find();
    console.log({
        'status' : 'success',
        'data' : allJournalists
    });
    res.send(allJournalists);
};

exports.createJournalist = async (req, res) => {
    try{
        const journalist = await Journalist.create({
            name : req.body.name,
            job_function : req.body.job_function,
            date_of_admission : req.body.date_of_admission,
            birthday : req.body.birthday,
            email : req.body.email
        });
        res.status(201).json(journalist);
    }
    catch (err) { console.log(err.message)};
};

exports.getJournalist = async (req,res) => {
    const journalistId = req.params._id;
    const journalist = await Journalist.findById(journalistId);
    res.send({data: journalist});
};
 
exports.updateJournalist = async (req, res) => {
    try{
        const journalistId = req.params._id;
        const journalist = await Journalist.findById(journalistId);
        Object.assign(journalist, req.body);
        journalist.save();
        res.send({ data: journalist });
    }catch (e){
        console.log(e.message);
        res.status(404).send({ error: 'This Journalist does not exist' });
    }
};
  
exports.deleteJournalist = async ( req, res) => {
    try{ 
        const journalistId = req.params._id;
        const journalist = await Journalist.findById(journalistId);
        console.log(journalist);
        journalist.delete(); 
        res.status(200).send( `The Journalist ${journalist.name} was deleted from the DataBase` );
    }catch (e){
        console.log(e.message);
        res.status(404).send({ error: 'Journalist not found' });
    }
}

  