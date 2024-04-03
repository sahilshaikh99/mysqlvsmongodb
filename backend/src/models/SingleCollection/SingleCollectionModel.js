const mongoose = require('mongoose');

// Define the schema for temperature measurements
const temperatureSchema = new mongoose.Schema({
    Day: Number,
    Month: Number,
    Year: Number,
    AvgTemperature: Number
});

// Define the schema for the main city temperature document
const cityTemperatureSchema = new mongoose.Schema({
    City: {
        type: String,
        required: true
    },
    State: {
        type: String,
    },
    Country: {
        type: String,
        required: true
    },
    Region: {
        type: String,
        required: true
    },
    Temperatures: [temperatureSchema]
});

// Create model for city temperature collection
const CityTemperature = mongoose.model('CityTemperature', cityTemperatureSchema);

module.exports = CityTemperature;
