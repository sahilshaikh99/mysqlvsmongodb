const express = require('express');
const CityTemperature = require('../../models/SingleCollection/SingleCollectionModel');

module.exports.delete = async (callback) => {
  try {
      const day = 1;
      const year = 1995; 
      const city = "Orlando"; 
  
      await CityTemperature.updateOne(
          { "City": city },
          { $pull: { "Temperatures": { "Day": day, "Year": year } }});
      return callback(null,);
  } catch (error) {
        console.error('Error deleting data into MongoDB:', error);
        return callback({ error: 'Error deleting data into MongoDB' });
  }
}

module.exports.delete1 = async (callback) => {
      try {
            await CityTempIndividual.insertMany(data);
            return callback(null,);
      } catch (error) {
            console.error('Error deleting data into MongoDB:', error);
            return callback({ error: 'Error deleting data into MongoDB' });
      }
}

module.exports.delete2 = async (callback) => {
      try {
            await CityTempIndividual.insertMany(data);
            return callback(null,);
      } catch (error) {
            console.error('Error deleting data into MongoDB:', error);
            return callback({ error: 'Error deleting data into MongoDB' });
      }
}
