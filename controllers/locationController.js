// ==== Model and Mongoose
const Location = require("./../models/locationModel.js");
const mongoose = require("mongoose");



exports.allLocations = async (req, res) => {
    const allLocations = await Location.find();
    console.log({
        'status' : 'success',
        'data' : allLocations
    });
    res.send(allLocations);
};

exports.createLocation = async (req, res) => {
    try{
        const Location = await Location.create({
            adress : req.body.adress,
            floor : req.body.floor,
            phonenumber : req.body.phonenumber,
        });
        res.status(201).json(Location);
    }
    catch (err) { console.log(err.message)};
};

exports.getLocation = async (req,res) => {
    const LocationId = req.params._id;
    const Location = await Location.findById(LocationId);
    res.send({data: Location});
};
 
exports.updateLocation = async (req, res) => {
    try{
        const LocationId = req.params._id;
        const Location = await Location.findById(LocationId);
        Object.assign(Location, req.body);
        Location.save();
        res.send({ data: Location });
    }catch (e){
        console.log(e.message);
        res.status(404).send({ error: 'This Location does not exist' });
    }
};
  
exports.deleteLocation = async ( req, res) => {
    try{ 
        const LocationId = req.params._id;
        const Location = await Location.findById(LocationId);
        console.log(Location);
        Location.delete(); 
        res.status(200).send( `The Location ${Location.name} was deleted from the DataBase` );
    }catch (e){
        console.log(e.message);
        res.status(404).send({ error: 'Location not found' });
    }
}

  