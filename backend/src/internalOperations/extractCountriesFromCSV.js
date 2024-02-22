const fs = require('fs');
const csv = require('csv-parser');
const Country = require('../models/countriesModel'); 

const filePath = 'city_temperature.csv';

const countryRegionMap = {};

module.exports.ExtractCountriesAndInsertInMongo = async (req,res) => {
    fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (data) => {
    const { Region, Country } = data;
    if (!countryRegionMap[Country]) {
      countryRegionMap[Country] = Region;
    }
  })
  .on('end', async () => {
    try {
        for (const country in countryRegionMap) {
            // Create a new document using the Country model
            const newCountry = new Country({
                countryName: country,
                regionName: countryRegionMap[country]
            });

            // Save the new country document to MongoDB
            await newCountry.save();
        }

        console.log('Data inserted into MongoDB');

        // Respond to the client indicating successful data insertion
        res.status(200).json({ message: 'Data inserted into MongoDB' });
    } catch (error) {
        console.error('Error inserting data into MongoDB:', error);
        // Respond to the client with an error message
        res.status(500).json({ error: 'Error inserting data into MongoDB' });
    }
});

}


