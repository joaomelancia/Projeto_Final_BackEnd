// ===== Mongoose connection to BD

const mongoose = require("mongoose");
 
mongoose.connect("mongodb://localhost:27017/jornalBD").then(() =>{
  console.log('Conected to MongoDB');
}).catch((err=>{
  console.log('Error connecting to MongoDB: ', err.message);
})); 

const Schema = new mongoose.Schema({
  adress: String,
  floor: Number,
  phonenumber : Number 
});
 
const Location = mongoose.model("location", Schema);

module.exports = Location; 