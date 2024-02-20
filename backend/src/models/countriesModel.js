const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for countries collection
const countrySchema = new Schema({
  countryName: {
    type: String,
    required: true,
    unique: true 
  },
  regionName: {
    type: String,
    required: true
  }
});

// Create model for countries collection
const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
