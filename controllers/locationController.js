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
        const location = await Location.create({
            adress : req.body.adress,
            floor : req.body.floor,
            phonenumber : req.body.phonenumber,
        });
        res.status(201).json(location);
    }
    catch (err) { console.log(err.message)};
};

exports.getLocation = async (req,res) => {
    const locationId = req.params._id;
    const location = await Location.findById(locationId);
    res.send({data: location});
};
 
exports.updateLocation = async (req, res) => {
    try{
        const locationId = req.params._id;
        const location = await Location.findById(locationId);
        Object.assign(location, req.body);
        location.save();
        res.send({ data: location });
    }catch (e){
        console.log(e.message);
        res.status(404).send({ error: 'This Location does not exist' });
    }
};
  
exports.deleteLocation = async ( req, res) => {
    try{ 
        const locationId = req.params._id;
        const location = await Location.findById(locationId);
        console.log(Location);
        location.delete(); 
        res.status(200).send( `The Location ${location.name} was deleted from the DataBase` );
    }catch (e){
        console.log(e.message);
        res.status(404).send({ error: 'Location not found' });
    }
}

  