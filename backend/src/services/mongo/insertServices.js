const CityTempIndividual = require('../../models/rowData/rowDataModel');
const CityTemperature = require('../../models/SingleCollection/SingleCollectionModel');

const {getCSVdata, getCSVdataNested} = require('../../helper/getCSVdata');

module.exports.insert = async (callback) => {
  try {
    await CityTempIndividual.create({
      Region: 'Region1',
      Country: 'Country1',
      State: 'State1',
      City: 'City1',
      Month: 1,
      Day: 1,
      Year: 2024,
      AvgTemperature: 25.5
    });
    return callback(null,);
  } catch (error) {
    console.error('Error performing MongoDB operations', error);
  } 
}

module.exports.insert1 = async (callback) => {
  try {
    const record = {
      City: 'London',
      State: '',
      Country: 'United Kingdom',
      Region: 'Europe',
      Temperatures: [
          {
              Day: 1,
              Month: 1,
              Year: 1995,
              AvgTemperature: 34.2
          }
      ]
    }

    await CityTemperature.create(record);
    return callback(null,);
  } catch (error) {
    console.error('Error performing MongoDB operations', error);
  } 
}

module.exports.insertFromCSV = async (volume, callback) => {
  try {
    const batchSize = 1000; 
    const data = await getCSVdata(volume);
    const totalRecords = data.length;
    let insertedCount = 0;

    for (let i = 0; i < totalRecords; i += batchSize) {
      const batchData = data.slice(i, i + batchSize);
      await CityTempIndividual.insertMany(batchData);
      insertedCount += batchData.length;
      console.log(`Inserted ${insertedCount} out of ${totalRecords} records.`);
    }

    return callback(null);
  } catch (error) {
    console.error('Error inserting data into MongoDB:', error);
    return callback({ error: 'Error inserting data into MongoDB' });
  }
}

module.exports.insertNested = async (volume, callback) => {
  try {
    const batchSize = 10; 
    const data = await getCSVdataNested(volume);
    const totalRecords = data.length;
    let insertedCount = 0;

    for (let i = 0; i < totalRecords; i += batchSize) {
      const batchData = data.slice(i, i + batchSize);
      await CityTemperature.insertMany(batchData);
      insertedCount += batchData.length;
      console.log(`Inserted ${insertedCount} out of ${totalRecords} records.`);
    }

    return callback(null, );
  } catch (error) {
    console.error('Error inserting data into MongoDB:', error);
    return callback({ error: 'Error inserting data into MongoDB' });
  }
}
