const mongoose = require('mongoose')

const bannerSchema = new mongoose.Schema({

    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['url', 'category', 'product']
    },
    target: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Banner', bannerSchema);