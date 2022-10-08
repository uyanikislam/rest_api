const express = require('express');
require('dotenv/config');
const productsRouter=require("./routes/products")

const app= express();
app.use("/products", productsRouter);
const port = process.env.PORT;
const mongoose= require('mongoose');



// fetch get 
// get get
// create post
// update put 
// delete delete 




mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true},
()=> console.log("mongi ok"))


app.listen(3000, () => {
    console.log('server ok');
})
