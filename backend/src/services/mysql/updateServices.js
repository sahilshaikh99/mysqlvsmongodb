const express = require('express');
const CityTempIndividual = require('../../models/rowData/rowDataModel');

module.exports.update =  async (callback) => {
  try {
        await CityTempIndividual.insertMany(data);
        return callback(null,);
  } catch (error) {
        console.error('Error updating data into MongoDB:', error);
        return callback({ error: 'Error updating data into MongoDB' });
  }
}

module.exports.update1 =  async (callback) => {
      try {
            await CityTempIndividual.insertMany(data);
            return callback(null,);
      } catch (error) {
            console.error('Error updating data into MongoDB:', error);
            return callback({ error: 'Error updating data into MongoDB' });
      }
}

module.exports.update2 =  async (callback) => {
      try {
            await CityTempIndividual.insertMany(data);
            return callback(null,);
      } catch (error) {
            console.error('Error updating data into MongoDB:', error);
            return callback({ error: 'Error updating data into MongoDB' });
      }
}
