const express = require('express');
const app = express();
const categoryRouter = require('./routes/categoryRouter');
const PORT = process.env.PORT || 8000

app.use(express.json());
const db = require('./config/db');

require('dotenv').config();

app.get('/home',(req,res)=>{
    res.send("Hello")
});

//Router
app.use('/api/v1/category/',categoryRouter);

app.listen(PORT,(err)=>{
    if(!err)
     console.log(`App are running on ${PORT}`)
});

