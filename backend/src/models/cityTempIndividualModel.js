const mongoose = require('mongoose');

// Define the schema for your data
const cityTempIndividualSchema = new mongoose.Schema({
    Region: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    State: {
        type: String,
        default: ''
    },
    City: {
        type: String,
        required: true
    },
    Month: {
        type: Number,
        required: true
    },
    Day: {
        type: Number,
        required: true
    },
    Year: {
        type: Number,
        required: true
    },
    AvgTemperature: {
        type: Number,
        required: true
    }
});

// Create a model for your schema
const CityTempIndividual = mongoose.model('cityTempIndividual', cityTempIndividualSchema);

module.exports =  CityTempIndividual;
