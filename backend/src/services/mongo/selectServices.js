const express = require('express');
const CityTempIndividual = require('../../models/rowData/rowDataModel');

module.exports.select =  async (volume, callback) => {
  try {
        await CityTempIndividual.insertMany(data);
        return callback(null,);
  } catch (error) {
        console.error('Error inserting data into MongoDB:', error);
        return callback({ error: 'Error inserting data into MongoDB' });
  }
};
