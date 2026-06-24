const mongoose = require('mongoose');
require('dotenv').config();
{/*const mongoURL='mongodb://localhost:27017/Amrit';*/}



mongoose.connect(process.env.DB_URL);

const db=mongoose.connection;

db.on('connected', ()=>{
    console.log('MongoDB is connected successfully')
});

db.on('error', (err)=>{
    console.log('MongoDB connection error:',err);
});

db.on('disconnected', ()=>{
    console.log('MongoDB is disconnected')
});

module.exports=db;
