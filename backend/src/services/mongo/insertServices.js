const CityTempIndividual = require('../../models/rowData/rowDataModel');
// const {getCSVdata} = require('../../helper/getCSVdata');

module.exports.insert = async (volume, callback) => {
  try {
    await CityTempIndividual.insertMany([
      { Region: 'Region1', Country: 'Country1', State: 'State1', City: 'City1', Month: 1, Day: 1, Year: 2024, AvgTemperature: 25.5 },
      { Region: 'Region1', Country: 'Country1', State: 'State1', City: 'City1', Month: 1, Day: 1, Year: 2024, AvgTemperature: 25.5 },
      { Region: 'Region1', Country: 'Country1', State: 'State1', City: 'City1', Month: 1, Day: 1, Year: 2024, AvgTemperature: 25.5 },
      { Region: 'Region1', Country: 'Country1', State: 'State1', City: 'City1', Month: 1, Day: 1, Year: 2024, AvgTemperature: 25.5 },
      { Region: 'Region1', Country: 'Country1', State: 'State1', City: 'City1', Month: 1, Day: 1, Year: 2024, AvgTemperature: 25.5 },
      { Region: 'Region1', Country: 'Country1', State: 'State1', City: 'City1', Month: 1, Day: 1, Year: 2024, AvgTemperature: 25.5 },
      { Region: 'Region1', Country: 'Country1', State: 'State1', City: 'City1', Month: 1, Day: 1, Year: 2024, AvgTemperature: 25.5 },
      { Region: 'Region1', Country: 'Country1', State: 'State1', City: 'City1', Month: 1, Day: 1, Year: 2024, AvgTemperature: 25.5 },
      { Region: 'Region1', Country: 'Country1', State: 'State1', City: 'City1', Month: 1, Day: 1, Year: 2024, AvgTemperature: 25.5 },
      { Region: 'Region1', Country: 'Country1', State: 'State1', City: 'City1', Month: 1, Day: 1, Year: 2024, AvgTemperature: 25.5 }
    ]);
    return callback(null,);
  } catch (error) {
    console.error('Error performing MongoDB operations', error);
  } 
}


module.exports.insertFromCSV =  async (volume, callback) => {
  try {
        const data = await getCSVdata(volume);
        await CityTempIndividual.insertMany(data);
        return callback(null,);
  } catch (error) {
        console.error('Error inserting data into MongoDB:', error);
        return callback({ error: 'Error inserting data into MongoDB' });
  }
}

module.exports.insertNested =  async (volume, callback) => {
    try {
          const data = await getCSVdata(volume);
          console.log(data);
          await CityTempIndividual.insertMany(data);
          return callback(null,);
    } catch (error) {
          console.error('Error inserting data into MongoDB:', error);
          return callback({ error: 'Error inserting data into MongoDB' });
    }
  }
  
  