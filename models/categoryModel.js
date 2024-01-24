const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    active:{
        type:Boolean,
        default:true,
    },
    image:{
        type: String,

    }
})

module.exports = mongoose.model('Category', categorySchema);