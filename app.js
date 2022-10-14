const express = require("express");
const authRouter=require ("./routes/auth");
const productsRouter=require("./routes/products")
const mongoose= require("mongoose");
require("dotenv/config");
const bodyParser= require("body-parser")
const cors=require("cors");
const verifyToken= require("./middleware/verifyToken")

const app= express();

app.use(bodyParser.json());



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


app.use("/auth", authRouter);
app.use("/products", verifyToken, productsRouter);
app.use("/products", productsRouter);
const port = process.env.PORT ||3000;



app.listen(port, () => {
    console.log(`Server ok at ${port}`);
  });
