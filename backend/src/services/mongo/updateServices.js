const express = require('express');
const CityTemperature = require('../../models/SingleCollection/SingleCollectionModel');

module.exports.update =  async (callback) => {
  try {
      const cityName = "Orlando";
      const day = 1;
      const newTemperature = 80.0;

      const result = await CityTemperature.updateOne(
      { "City": cityName, "Temperatures.Day": day },
      { $set: { "Temperatures.$.AvgTemperature": newTemperature } });

      return callback(null,);
      
  } catch (error) {
        console.error('Error inserting data into MongoDB:', error);
        return callback({ error: 'Error inserting data into MongoDB' });
  }
}


module.exports.update1 =  async (callback) => {
      try {
            const region = "Africa";
            const temperatureIncrement = 1.0;
            
            const result = await CityTemperature.updateMany(
                { "Region": region },
                { $inc: { "Temperatures.$[].AvgTemperature": temperatureIncrement } });
 
            return callback(null,);
            
        } catch (error) {
              console.error('Error inserting data into MongoDB:', error);
              return callback({ error: 'Error inserting data into MongoDB' });
        }
}
    
module.exports.update2 =  async (callback) => {
      try {
            await CityTempIndividual.insertMany(data);
            return callback(null,);
      } catch (error) {
            console.error('Error inserting data into MongoDB:', error);
            return callback({ error: 'Error inserting data into MongoDB' });
      }
}
    