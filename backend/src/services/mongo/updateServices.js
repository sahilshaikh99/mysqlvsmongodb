const CityTemperature = require('../../models/SingleCollection/SingleCollectionModel');
const CityTempIndividual = require('../../models/rowData/rowDataModel');

module.exports.update =  async (callback) => {
      try {
            const newTemperature = 80;
      
            const result = await CityTempIndividual.updateOne(
                  { _id:  "6627405c41fea274448e83d2"},
                  { $set: { "AvgTemperature": newTemperature } });

            return callback(null,);
            
      } catch (error) {
            console.error('Error updating data into MongoDB:', error);
            return callback({ error: 'Error updating data into MongoDB' });
      }
}


module.exports.update1 =  async (callback) => {
      try {             
            const AvgTemperature = 80;

            const newTemperature = 90;

            const result = await CityTempIndividual.updateOne({ 'AvgTemperature' : AvgTemperature }, 
            { $set: { "AvgTemperature": newTemperature } } );
 
            return callback(null,);
            
      } catch (error) {
            console.error('Error updating data into MongoDB:', error);
            return callback({ error: 'Error updating data into MongoDB' });
      }
}
    
module.exports.update2 =  async (callback) => {
      try {
            const cityName = "Algiers";
            const day = 31;
            const month = 7;
            const year = 2013; 
            const newTemperature = 79;
            

            const result = await CityTemperature.updateOne(
            { "City": cityName, "Temperatures.Day": day,  "Temperatures.Month": month, "Temperatures.Year": year},
            { $set: { "Temperatures.$.AvgTemperature": newTemperature } });
      
            return callback(null,);
            
        } catch (error) {
              console.error('Error inserting data into MongoDB:', error);
              return callback({ error: 'Error inserting data into MongoDB' });
        }
}
    
module.exports.update3 =  async (callback) => {
      try {
            const region = "North America";
            const temperatureIncrement = 2.0;
            
            const result = await CityTemperature.updateMany(
                { "Region": region },
                { $inc: { "Temperatures.$[].AvgTemperature": temperatureIncrement } });
 
            return callback(null,);
            
        } catch (error) {
              console.error('Error inserting data into MongoDB:', error);
              return callback({ error: 'Error inserting data into MongoDB' });
        }
}
    