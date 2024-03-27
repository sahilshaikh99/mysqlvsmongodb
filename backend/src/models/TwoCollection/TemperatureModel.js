const mongoose = require('mongoose');

const temperatureSchema = new mongoose.Schema({
    city_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    },
    day: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    avg_temperature: {
        type: Number,
        required: true
    }
});

const Temperature = mongoose.model('Temperature', temperatureSchema);

module.exports = {
    Temperature
};
