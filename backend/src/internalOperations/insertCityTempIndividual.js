const fs = require('fs');
const csv = require('csv-parser');
const CityTempIndividual = require('../models/cityTempIndividualModel');

const filePath = 'city_temperature.csv';
const MAX_RECORDS = 100000; // Maximum number of records to process

module.exports.insertCityTempIndividualInMongo = async (req, res) => {
    try {
        const temperatures = [];
        let recordCount = 0; // Initialize record count

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => {
                if (recordCount >= MAX_RECORDS) {
                    // Stop reading from the file if maximum records reached
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
            .on('end', async () => {
                    await CityTempIndividual.insertMany(temperatures);
                console.log('Data inserted into MongoDB');
                res.status(200).json({ message: 'Data inserted into MongoDB' });
            });
    } catch (error) {
        console.error('Error inserting data into MongoDB:', error);
        res.status(500).json({ error: 'Error inserting data into MongoDB' });
    }
};
