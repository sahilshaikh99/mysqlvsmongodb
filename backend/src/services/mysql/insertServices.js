const express = require('express');
const mysqlConnection = require('../../config/db');
const {getCSVdata, getCSVCityData, getCSVTemperatureData } = require('../../helper/getCSVdata');

module.exports.insert = async (volume, callback) => {
  try {
    mysqlConnection.query(
      "INSERT INTO city_temp_individual (Region, Country, State, City, Month, Day, Year, AvgTemperature) VALUES (?)",
      [
        ['Region1', 'Country1', 'State1', 'City1', 1, 1, 2024, 25.5]
      ],
      (error, results, fields) => {
        if (error) {
          console.error('Error performing batch insert:', error);
          return callback(error);
        } else {
          // console.log('Batch insert successful');
          return callback(null, );
        }
      }
    );      
  } catch (error) {
    console.error('Error inserting data into MySQL', error);
    return callback({ error: 'Error inserting data into MySQL' });
  }
}


module.exports.insertFromCSV = async (volume, callback) => {
  try {
    const batchSize = 1000; // Adjust batch size as needed
    const data = await getCSVdata(volume);
    
    // Convert CSV data into a nested array suitable for bulk insert
    const values = data.map(row => [
      row.Region,
      row.Country,
      row.State,
      row.City,
      row.Month,
      row.Day,
      row.Year,
      row.AvgTemperature
    ]);

    // Perform batch insertion in chunks
    for (let i = 0; i < values.length; i += batchSize) {
      const batchValues = values.slice(i, i + batchSize);
      await performMySQLBulkInsert(batchValues);
      console.log(`Inserted ${Math.min(i + batchSize, values.length)} out of ${values.length} records.`);
    }

    return callback(null);
  } catch (error) {
    console.error('Error inserting data into MySQL:', error);
    return callback({ error: 'Error inserting data into MySQL' });
  }
}

// Function to perform MySQL bulk insert
async function performMySQLBulkInsert(values) {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(
      "INSERT INTO city_temp_individual (Region, Country, State, City, Month, Day, Year, AvgTemperature) VALUES ?",
      [values],
      (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      }
    );
  });
}

module.exports.insertCityTable = async (volume, callback) => {
  try {
      const cities = await getCSVCityData(volume);
      const batchSize = 100; // Adjust batch size as needed
      const totalCities = cities.length;
      let insertedCitiesCount = 0;

      // Insert cities in batches
      for (let i = 0; i < totalCities; i += batchSize) {
          const batchCities = cities.slice(i, i + batchSize);
          const cityValues = batchCities.map(city => [
              city.name, city.country, city.state, city.region
          ]);

          mysqlConnection.query(
              "INSERT INTO city (name, country, state, region) VALUES ?",
              [cityValues],
              (error, results) => {
                  if (error) {
                      console.error('Error performing insert for city data:', error);
                      return callback(error);
                  }
                  insertedCitiesCount += results.affectedRows;
                  console.log(`Inserted ${insertedCitiesCount} out of ${totalCities} cities.`);
              }
          );
      }

      return callback(null, );
  } catch (error) {
      console.error('Error inserting city data into MySQL:', error);
      return callback(error);
  }
};


// Function to insert temperature data into MySQL
module.exports.insertTemperatureTable = async (volume, callback) => {
  try {
      const cityIdMap = await getCityIdMapFromDB();
      const temperatures = await getCSVTemperatureData(volume, cityIdMap);

      const batchSize = 100; // Adjust batch size as needed
      const totalTemperatures = temperatures.length;
      let insertedTemperaturesCount = 0;

      // Insert temperatures in batches
      for (let i = 0; i < totalTemperatures; i += batchSize) {
          const batchTemperatures = temperatures.slice(i, i + batchSize);
          const temperatureValues = batchTemperatures.map(temp => [
              temp.city_id, temp.day, temp.month, temp.year, temp.avg_temperature
          ]);

          mysqlConnection.query(
              "INSERT INTO temperature (city_id, day, month, year, avg_temperature) VALUES ?",
              [temperatureValues],
              (error, results) => {
                  if (error) {
                      console.error('Error performing insert for temperature data:', error);
                      return callback(error);
                  }
                  insertedTemperaturesCount += results.affectedRows;
                  console.log(`Inserted ${insertedTemperaturesCount} out of ${totalTemperatures} temperatures.`);
              }
          );
      }

      return callback(null);
  } catch (error) {
      console.error('Error inserting temperature data into MySQL:', error);
      return callback(error);
  }
};

async function getCityIdMapFromDB() {
  return new Promise((resolve, reject) => {
      mysqlConnection.query(
          "SELECT city_id, name FROM city",
          (error, results) => {
              if (error) {
                  return reject(error);
              }
              const cityIdMap = new Map();
              results.forEach(city => {
                  cityIdMap.set(city.name.trim().toLowerCase(), city.city_id);
              });
              resolve(cityIdMap);
          }
      );
  });
}