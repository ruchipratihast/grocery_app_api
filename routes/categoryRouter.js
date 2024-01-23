const express = require('express');
const router = express.Router();

router.get('/category',(req,res)=>{
    res.send("All category is here !");
})

module.exports = router;