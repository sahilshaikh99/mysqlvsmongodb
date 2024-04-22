const CityTemperature = require('../../models/SingleCollection/SingleCollectionModel');
const CityTempIndividual = require('../../models/rowData/rowDataModel');

module.exports.update =  async (callback) => {
      try {
            const newTemperature = 80.0;
      
            const result = await CityTempIndividual.updateOne(
                  { _id:  "6623439a83d7e8f64f6e618c"},
                  { $set: { "AvgTemperature": newTemperature } });

            return callback(null,);
            
      } catch (error) {
            console.error('Error updating data into MongoDB:', error);
            return callback({ error: 'Error updating data into MongoDB' });
      }
}


module.exports.update1 =  async (callback) => {
      try {             
            const AvgTemperature = -36.7;

            const newTemperature = 90.0;

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
            const cityName = "Seattle";
            const day = 8;

            const newTemperature = 79.0;
            

            const result = await CityTemperature.updateOne(
            { "City": cityName, "Temperatures.Day": day },
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
    