//create collection
const mongoose = require('mongoose')
const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }
})
//table of Alien should have schema type alienschema
module.exports = mongoose.model('Alien',alienSchema)