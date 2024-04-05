const express = require('express');
const mysqlConnection = require('../../config/db');

module.exports.update =  async (callback) => {
  try {
      const cityName = "Orlando";
      const day = 1;
      const newTemperature = 80.0;
      
      const query = `UPDATE temperature t
        JOIN city c ON t.city_id = c.city_id
        SET t.avg_temperature = ?
        WHERE c.name = ? AND t.day = ?`;
      
      mysqlConnection.query(query, [newTemperature, cityName, day], (error, results, fields) => {
            if (error) {
              console.error('Error updating data:', error);
              return callback(error);
            }
            return callback(null, );
          });
  } catch (error) {
        console.error('Error updating data into MySQL:', error);
        return callback({ error: 'Error updating data into MySQL' });
  }
}

module.exports.update1 =  async (callback) => {
      try {
            const query = `UPDATE temperature t
                        JOIN city c ON t.city_id = c.city_id
                        SET t.avg_temperature = t.avg_temperature - 1.0
                        WHERE c.region = 'Africa'`;
            mysqlConnection.query(query, (error, results) => {
                  if (error) {
                        console.error('Error retrieving data:', error);
                        return callback(error);
                  }
                  return callback(null,);
            });
      } catch (error) {
            console.error('Error updating data into MySQL:', error);
            return callback({ error: 'Error updating data into MySQL' });
      }
}

module.exports.update2 =  async (callback) => {
      try {
            await CityTempIndividual.insertMany(data);
            return callback(null,);
      } catch (error) {
            console.error('Error updating data into MySQL:', error);
            return callback({ error: 'Error updating data into MySQL' });
      }
}
