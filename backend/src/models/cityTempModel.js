// cityModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cityTempSchema = new Schema({
  cityName: {
    type: String,
    required: true
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: 'Country'
  }
});

const Citytemp = mongoose.model('citytemp', cityTempSchema);

module.exports = Citytemp;
