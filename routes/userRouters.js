const express = require('express');
const router = express.Router();
const Person=require('./../model/new.js');

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newUser=new Person(data);
        const response=await newUser.save();
        console.log('User saved successfully');
        res.status(201).json(response);
    }catch(err){
        console.error('Error saving user:',err);
        res.status(500).json({error:'Internal server error'});
    }
});

router.get('/',async(req,res)=>{
    try{
        const data=await Person.find();
        res.status(200).json(data);
    }catch(err){
        console.error('Error fetching users:',err);
        res.status(500).json({error:'Internal server error'});
    }
});

module.exports=router;