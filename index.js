require('dotenv').config()

//==== basic config ======
const express = require("express"); 
const app = express(); 
const mongoose = require('mongoose')

const journalistRouter = require('./routes/journalistRoute')
const locationRouter = require('./routes/locationRoute')
const sectionRouter = require('./routes/sectionRoute')

app.use(express.json());

// mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open',  () => console.log('Connection to database acomplished. Welcome Professor.'))

app.use('/journalistRoute', journalistRouter)
app.use('/locationRoute', locationRouter)
app.use('/sectionRoute', sectionRouter)

//====== Local server ======
app.listen(3000, ()=>{
    console.log(`Server has started`);
});