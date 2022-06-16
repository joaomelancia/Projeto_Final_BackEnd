// ===== Mongoose connection to BD

const mongoose = require("mongoose");
 
mongoose.connect("mongodb://localhost:27017/jornalBD").then(() =>{
  console.log('Conected to MongoDB');
}).catch((err=>{
  console.log('Error connecting to MongoDB: ', err.message);
})); 

const Schema = new mongoose.Schema({
  name:String,
  reports_on: String,
  number_of_workers: Number,
  alloted_parking_space : Number,
  section_email : String 
});
 
const Section = mongoose.model("section", Schema);

module.exports = Section; 