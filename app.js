const express = require("express");
const productsRouter=require("./routes/products")
const mongoose= require("mongoose");
require("dotenv/config");
const bodyParser= require("body-parser")
const cors=require("cors");


const app= express();

app.use(bodyParser.json());

app.use("/products", productsRouter);

mongoose.connect(
    process.env.DB_CONNECTION,
    (e) => {
        if (e) {
          console.log(e);
        } else {
          console.log("mongi ok");
        }
      }
);


const port = process.env.PORT ||5000;


// const isLoggedIn= false;
// app.use((req,res, next) => {
//     if (!isLoggedIn) {
//         res.send("please log in");
//     } else{
//         next();
//     }
// })
//  app.get("/", (req,res) => {
//     res.send("ok");
//  });


app.listen(port, () => {
    console.log(`Server ok at ${port}`);
  });
