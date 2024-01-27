const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGODB_URI)
          .then((result)=>{
              console.log('Successfuly connected to db');
          })
          .catch((err)=>{
            console.log(err);
          })

module.exports = db;