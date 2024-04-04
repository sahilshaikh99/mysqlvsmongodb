const mongoose = require('mongoose');

const temperatureSchema = new mongoose.Schema({
    Day: Number,
    Month: Number,
    Year: Number,
    AvgTemperature: Number
});

const cityTemperatureSchema = new mongoose.Schema({
    City: {
        type: String,
        index: true
    },
    State: {
        type: String,
    },
    Country: {
        type: String,
    },
    Region: {
        type: String,
    },
    Temperatures: [temperatureSchema]
});


const CityTemperature = mongoose.model('CityTemperature', cityTemperatureSchema);

module.exports = CityTemperature;
