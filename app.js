const express = require('express');
require('dotenv/config');
const productsRouter=require("./routes/products")

const app= express();
app.use("/products", productsRouter);
const port = process.env.PORT;
const mongoose= require('mongoose');



const isLoggedIn= false;
app.use((req,res, next) => {
    if (!isLoggedIn) {
        res.send("please log in");
    } else{
        next();
    }
})
 app.get("/", (req,res) => {
    res.send("ok");
 });




mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true},
()=> console.log("mongi ok"))


app.listen(3000, () => {
    console.log('server ok');
})
