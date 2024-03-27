const express = require('express');
const axios = require('axios');
const CityTempIndividual = require('../../models/rowData/rowDataModel');
const CityTemperature = require('../../models/SingleCollection/SingleCollectionModel');

const {getCSVdata} = require('../../helper/getCSVdata');

module.exports.insert =  async (volume, callback) => {
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
  
  