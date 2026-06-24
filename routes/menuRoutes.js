const express = require('express');
const router = express.Router();
const MenuItem=require('./../model/menuItems.js');


// make the api for menu items
router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newMenu = new MenuItem(data);
        const response=await newMenu.save();
        console.log('menu item is saved successfully');
        res.status(200).json(response);



    }catch(err){
        console.error('Error saving menu item:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log('menu items are fetched successfully');
        res.status(200).json(data);

    }catch(err){
        console.error('Error fetching menu items:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }


})


module.exports=router;