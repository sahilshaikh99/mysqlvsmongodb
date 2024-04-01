const express = require('express');
const mysqlConnection = require('../../config/db');
const {getCSVdata} = require('../../helper/getCSVdata');

module.exports.insert =  async (volume, callback) => {
 try {
        mysqlConnection.query(
          "INSERT INTO city_temp_individual (Region, Country, State, City, Month, Day, Year, AvgTemperature) VALUES ?",
          [
            [
              ['Region1', 'Country1', 'State1', 'City1', 1, 1, 2024, 25.5],
              ['Region1', 'Country1', 'State1', 'City1', 1, 1, 2024, 25.5],
              ['Region1', 'Country1', 'State1', 'City1', 1, 1, 2024, 25.5],
              ['Region1', 'Country1', 'State1', 'City1', 1, 1, 2024, 25.5],
              ['Region1', 'Country1', 'State1', 'City1', 1, 1, 2024, 25.5],
              ['Region1', 'Country1', 'State1', 'City1', 1, 1, 2024, 25.5],
              ['Region1', 'Country1', 'State1', 'City1', 1, 1, 2024, 25.5],
              ['Region1', 'Country1', 'State1', 'City1', 1, 1, 2024, 25.5],
              ['Region1', 'Country1', 'State1', 'City1', 1, 1, 2024, 25.5],
              ['Region1', 'Country1', 'State1', 'City1', 1, 1, 2024, 25.5]
            ]
          ],
          (error, results, fields) => {
            if (error) {
              console.error('Error performing batch insert:', error);
            } else {
              // console.log('Batch insert successful');
            }
          }
        );
        
        return callback(null,);
  } catch (error) {
        console.error('Error inserting data into MySQL', error);
        return callback({ error: 'Error inserting data into MySQL' });
  }
}

module.exports.insertFromCSV = async (volume, callback) => {
  try {
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

    // Perform bulk insert using INSERT INTO ... VALUES syntax
    mysqlConnection.query(
      "INSERT INTO city_temp_individual (Region, Country, State, City, Month, Day, Year, AvgTemperature) VALUES ?",
      [values],
      (error, results, fields) => {
        if (error) {
          console.error('Error performing MySQL bulk insert:', error);
          return callback({ error: 'Error inserting data into MySQL' });
        } else {
          console.log('MySQL bulk insert successful');
          return callback(null);
        }
      }
    );
  } catch (error) {
    console.error('Error inserting data into MySQL:', error);
    return callback({ error: 'Error inserting data into MySQL' });
  }
}
