// ===== Mongoose connection to BD

const mongoose = require("mongoose");
 
mongoose.connect("mongodb://localhost:27017/jornalBD").then(() =>{
  console.log('Conected to MongoDB');
}).catch((err=>{
  console.log('Error connecting to MongoDB: ', err.message);
})); 

const Schema = new mongoose.Schema({
  name:String,
  job_function: String,
  date_of_admission: Date,
  birthday : Number,
  email : String 
});
 
const Journalist = mongoose.model("journalist", Schema);

module.exports = Journalist; 