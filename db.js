const mongoose = require('mongoose');

const mongoURL='mongodb://localhost:27017/Amrit';

mongoose.connect(mongoURL);

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
