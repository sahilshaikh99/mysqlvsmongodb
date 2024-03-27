const csv = require('csv-parser');
const fs = require('fs');

// Function to insert data into MongoDB
module.exports.getCSVdata = async (volume) => {
    // Define CSV file path

    const filePath = process.env.DATA_FILE + ".csv";
    const MAX_RECORDS = volume; // Maximum number of records to process


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
};