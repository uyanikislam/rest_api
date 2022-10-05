const express = require('express');

const app= express();
const mongoose= require('mongoose');
require('dotenv/config');
const productsRouter=require('./routes/products')


app.use("/products", productsRouter);


// fetch get 
// get get
// create post
// update put 
// delete delete 




mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true},
    ()=> console.log("mongi ok"))


app.listen(process.env.PORT, () => {
    console.log("server ok")
});

