const fs = require('fs');
const csv = require('csv-parser');

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
  .on('end', () => {
    console.log(countryRegionMap);
    // You can further process the map here
  });
}


