const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000
const db = require('./config/db');

require('dotenv').config();

app.get('/home',(req,res)=>{
    res.send("Hello")
})

app.listen(PORT,(err)=>{
    if(!err)
     console.log(`App are running on ${PORT}`)
});

