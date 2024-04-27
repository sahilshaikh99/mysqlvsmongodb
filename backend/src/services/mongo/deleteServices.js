const CityTemperature = require('../../models/SingleCollection/SingleCollectionModel');
const CityTempIndividual = require('../../models/rowData/rowDataModel');

module.exports.delete = async (callback) => {
  try {
      await CityTempIndividual.deleteOne({ _id: "6627405c41fea274448e83d2" });
      return callback(null,);
  } catch (error) {
        console.error('Error deleting data into MongoDB:', error);
        return callback({ error: 'Error deleting data into MongoDB' });
  }
}

module.exports.delete1 = async (callback) => {
      const AvgTemperature = 140;
      try {
          await CityTempIndividual.deleteOne({ 'AvgTemperature' : AvgTemperature });
          return callback(null,);
      } catch (error) {
            console.error('Error deleting data into MongoDB:', error);
            return callback({ error: 'Error deleting data into MongoDB' });
      }
 }
    

module.exports.delete2 = async (callback) => {
      try {
            const day = 31;
            const year = 2013; 
            const month = 7;
            const city = "San Juan Puerto Rico";
 
            await CityTemperature.updateOne(
                { "City": city },
                { $pull: { "Temperatures": { "Day": day, "Year": year, "Month": month } }});
            return callback(null,);
        } catch (error) {
              console.error('Error deleting data into MongoDB:', error);
              return callback({ error: 'Error deleting data into MongoDB' });
        }
}

module.exports.delete3 = async (callback) => {
      try {
            await CityTemperature.deleteMany({});
            return callback(null,);
      } catch (error) {
            console.error('Error deleting data into MongoDB:', error);
            return callback({ error: 'Error deleting data into MongoDB' });
      }
}
