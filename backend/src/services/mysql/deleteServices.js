const express = require('express');
const mysqlConnection = require('../../config/db');
module.exports.delete = async (callback) => {
      try {
        const query = `
          DELETE t
          FROM temperature t
          JOIN city c ON t.city_id = c.city_id
          WHERE t.day = 1
          AND t.year = 1995
          AND c.name = 'Orlando'
        `;
    
        mysqlConnection.query(query, (error, results) => {
          if (error) {
            console.error('Error deleting data:', error);
            return callback(error);
          }  
          console.log('Deleted records:', results.affectedRows);
          return callback(null, );
        });
      } catch (error) {
        console.error('Error deleting data from MySQL:', error);
        return callback({ error: 'Error deleting data from MySQL' });
      }
}
    

module.exports.delete1 =  async (callback) => {
      try {
            await CityTempIndividual.insertMany(data);
            return callback(null,);
      } catch (error) {
            console.error('Error deleting data into MySQL:', error);
            return callback({ error: 'Error deleting data into MySQL' });
      }
}

module.exports.delete2 =  async (callback) => {
      try {
            await CityTempIndividual.insertMany(data);
            return callback(null,);
      } catch (error) {
            console.error('Error deleting data into MySQL:', error);
            return callback({ error: 'Error deleting data into MySQL' });
      }
}
    