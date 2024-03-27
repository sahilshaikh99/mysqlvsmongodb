const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
    },
    country: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    }
});

const City = mongoose.model('City', citySchema);

module.exports = {City};