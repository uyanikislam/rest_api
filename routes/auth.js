const express=require("express");
const User= require("../models/User")
const router= express.Router();


router.post('/register', (req,res)=>{
    const{name, email, password} = req.body;
    const user= new User({name, email, password});
    user.save().then((user) =>{res.json(user)}).catch((err) =>{res.json(err)});
});

router.post('/login', (req,res)=>{
    res.send("login");
});



module.exports= router;

