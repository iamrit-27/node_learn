const express = require('express');
const router = express.Router();
const Person=require('./../model/person.js');

router.post('/',async(req,res)=>{
    try{
        const data=req.body;

        const newPerson = new Person(data);

        const response=await newPerson.save();
        console.log('data is saved successfully');
        res.status(200).json(response);


    }catch(err){
        console.error('Error saving data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


router.get('/',async(req,res)=>{
    try{
        const data=await Person.find();
        console.log('data is fetched successfully');
        res.status(200).json(data);
    }catch(err){
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


router.get('/:workType',async(req,res)=>{

    try{
        const workType=req.params.workType;        if(workType==='student' || workType==='teacher' || workType==='engineer' || workType==='doctor  '){
            const response=await Person.find({work:workType});
            console.log('data is fetched successfully');
            res.status(200).json(response);

        }else{
            res.status(400).json({error:'Invalid work type'});

        }

    }catch(err){
       console.error('Error fetching person by work type:', err);
        res.status(500).json({ error: 'Internal Server Error' }); 

    }
})

//here as person is common everywhere /person inthis api we can remove here person and add it to our main file .index.js here it will stay as / only


//now we are makeing an api for update the data of person by id and we are using put method for that

router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const updatedPersonData=req.body;
        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,
            runValidators:true

            
        })

        console.log('person data is updated successfully');
        res.status(200).json(response);

    }catch(err){
        console.error('Error updating person data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//now we are makeing an api for delete the data of person by id and we are using delete method for that
router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const response=await Person.findByIdAndDelete(personId);

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('person data is deleted successfully');
        res.status(200).json({ message: 'Person deleted successfully' });

    }catch(err){
        console.error('Error deleting person data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports=router;