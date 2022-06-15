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
        const Journalist = await Journalist.create({
            name : req.body.name,
            job_function : req.body.job_function,
            date_of_admission : req.body.date_of_admission,
            birthday : req.body.birthday,
            email : req.body.email
        });
        res.status(201).json(Journalist);
    }
    catch (err) { console.log(err.message)};
};

exports.getJournalist = async (req,res) => {
    const JournalistId = req.params._id;
    const Journalist = await Journalist.findById(JournalistId);
    res.send({data: Journalist});
};
 
exports.updateJournalist = async (req, res) => {
    try{
        const JournalistId = req.params._id;
        const Journalist = await Journalist.findById(JournalistId);
        Object.assign(Journalist, req.body);
        Journalist.save();
        res.send({ data: Journalist });
    }catch (e){
        console.log(e.message);
        res.status(404).send({ error: 'This Journalist does not exist' });
    }
};
  
exports.deleteJournalist = async ( req, res) => {
    try{ 
        const JournalistId = req.params._id;
        const Journalist = await Journalist.findById(JournalistId);
        console.log(Journalist);
        Journalist.delete(); 
        res.status(200).send( `The Journalist ${Journalist.name} was deleted from the DataBase` );
    }catch (e){
        console.log(e.message);
        res.status(404).send({ error: 'Journalist not found' });
    }
}

  