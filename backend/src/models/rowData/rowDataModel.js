const mongoose = require('mongoose');

const cityTempIndividualSchema = new mongoose.Schema({
    Region: {
        type: String,
    },
    Country: {
        type: String,
    },
    State: {
        type: String,
    },
    City: {
        type: String,
        index: true
    },
    Month: {
        type: Number,
    },
    Day: {
        type: Number,
    },
    Year: {
        type: Number,
    },
    AvgTemperature: {
        type: Number,
    }
});



const CityTempIndividual = mongoose.model('cityTempIndividual', cityTempIndividualSchema);

module.exports =  CityTempIndividual;
