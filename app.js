const express = require('express');

const app= express();
const mongoose= require('mongoose');
require('dotenv/config');


const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);



app.get('/', (req,res)=>{
    res.send('main');
});



mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true},
    ()=> console.log('mongi ok'))


app.listen(3000);