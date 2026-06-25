const express= require('express');
const app=express();

const mongoose=require('mongoose');

const db=require('./db');
require('dotenv').config();



const bodyParser=require('body-parser');
app.use(bodyParser.json());

// app.post('/person',async(req,res)=>{
//     try{
//         const data=req.body;

//         const newPerson = new Person(data);

//         const response=await newPerson.save();
//         console.log('data is saved successfully');
//         res.status(200).json(response);


//     }catch(err){
//         console.error('Error saving data:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// })

// app.get('/person',async(req,res)=>{
//     try{
//         const data=await Person.find();
//         console.log('data is fetched successfully');
//         res.status(200).json(data);
//     }catch(err){
//         console.error('Error fetching data:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// })

// // make the api for menu items
// app.post('/menu',async(req,res)=>{
//     try{
//         const data=req.body;
//         const newMenu = new MenuItem(data);
//         const response=await newMenu.save();
//         console.log('menu item is saved successfully');
//         res.status(200).json(response);



//     }catch(err){
//         console.error('Error saving menu item:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// })

// app.get('/menu',async(req,res)=>{
//     try{
//         const data=await MenuItem.find();
//         console.log('menu items are fetched successfully');
//         res.status(200).json(data);

//     }catch(err){
//         console.error('Error fetching menu items:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }


// })

//router api using work 

// app.get('/person/:workType',async(req,res)=>{

//     try{
//         const workType=req.params.workType;        if(workType==='student' || workType==='teacher' || workType==='engineer' || workType==='doctor  '){
//             const response=await Person.find({work:workType});
//             console.log('data is fetched successfully');
//             res.status(200).json(response);

//         }else{
//             res.status(400).json({error:'Invalid work type'});

//         }

//     }catch(err){
//        console.error('Error fetching person by work type:', err);
//         res.status(500).json({ error: 'Internal Server Error' }); 

//     }
// })


//importing the person routes by the router through express router

const personRoutes= require('./routes/PersonRoutes.js');
const menuRoutes = require('./routes/menuRoutes.js');
const userRoutes = require('./routes/userRouters.js');

app.use('/user',userRoutes);

app.use('/person',personRoutes);
app.use('/menu',menuRoutes);


const PORT=process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log('Amrit is on working in this server ')
})


