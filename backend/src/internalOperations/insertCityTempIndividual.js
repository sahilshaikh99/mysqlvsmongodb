// const fs = require('fs');
// const csv = require('csv-parser');
// const CityTempIndividual = require('../models/cityTempIndividualModel');

// const filePath = 'city_temperature.csv';
// const MAX_RECORDS = 1000; // Maximum number of records to process

// module.exports.insertCityTempIndividualInMongo = async (req, res) => {
//     try {
//         let temperatures = [];
//         let recordCount = 0;

//         fs.createReadStream(filePath)
//             .pipe(csv())
//             .on('data', async (data) => {
//                 if (recordCount >= MAX_RECORDS) {
//                     // Stop reading the CSV file
//                     return;
//                 }

//                 const temperatureData = {
//                     Region: data.Region,
//                     Country: data.Country,
//                     State: data.State || '',
//                     City: data.City,
//                     Month: parseInt(data.Month),
//                     Day: parseInt(data.Day),
//                     Year: parseInt(data.Year),
//                     AvgTemperature: parseFloat(data.AvgTemperature)
//                 };
//                 temperatures.push(temperatureData);
//                 recordCount++;
//             })
//             .on('end', async () => {
//                 await insertData(temperatures);
//                 console.log('Data inserted into MongoDB');
//                 res.status(200).json({ message: 'Data inserted into MongoDB' });
//             });

//     } catch (error) {
//         console.error('Error inserting data into MongoDB:', error);
//         res.status(500).json({ error: 'Error inserting data into MongoDB' });
//     }
// };

// async function insertData(data) {
//     try {
//         await CityTempIndividual.insertMany(data);
//     } catch (error) {
//         console.error('Error inserting data:', error);
//         throw error;
//     }
// }


const express = require('express');
// const mongoose = require('mongoose');
const csv = require('csv-parser');
const fs = require('fs');
// const CityTempIndividual = require('../models/rowData/rowDataModel');

// Initialize Express app
const app = express();

// Define CSV file path
const filePath = 'city_temperature.csv';
const MAX_RECORDS = 10000; // Maximum number of records to process

// Function to insert data into MongoDB
async function insertData() {
  const temperatures = [];
  let recordCount = 0;

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        if (recordCount >= MAX_RECORDS) {
          // Stop reading from the file if maximum records reached
          resolve(temperatures);
          return;
        }
        const temperatureData = {
          Region: data.Region,
          Country: data.Country,
          State: data.State || '',
          City: data.City,
          Month: parseInt(data.Month),
          Day: parseInt(data.Day),
          Year: parseInt(data.Year),
          AvgTemperature: parseFloat(data.AvgTemperature)
        };
        temperatures.push(temperatureData);
        recordCount++;
      })
      .on('end', () => resolve(temperatures))
      .on('error', reject);
  });
}

// Express route to insert data
module.exports.insertCityTempIndividualInMongo = async (req, res) => {
  try {
    const data = await insertData();
    await CityTempIndividual.insertMany(data);
    res.status(200).json({ message: 'Data inserted into MongoDB' });
  } catch (error) {
    console.error('Error inserting data into MongoDB:', error);
    res.status(500).json({ error: 'Error inserting data into MongoDB' });
  }
};
