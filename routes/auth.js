const express=require("express");
const User= require("../models/User")
const Joi=require("@hapi/joi")
const bcrypt = require("bcryptjs")


const registerSchema=Joi.object({
    name: Joi.string().required().min(3).max(255),
    email: Joi.string().required().email().min(6).max(255), 
    password: Joi.string().required().min(6).max(255),
})

const router= express.Router();


router.post("/register", (req,res)=>{
    
    const  {error} = registerSchema.validate(req.body);
    if (error){
        res.status(400).send(error.details[0].message);
        return;
    }

    const salt = bcrypt.genSaltSync(10);
     const hash = bcrypt.hashSync(req.body.password, salt);

    const user= new User(req.body);
    user
    .save()
    .then((user) =>{
        res.json(user)})
    .catch((err) =>{
        res.json(err)});
});

router.post('/login', (req,res)=>{
    res.send("login");
});



module.exports= router;

