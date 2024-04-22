const CityTemperature = require('../../models/SingleCollection/SingleCollectionModel');
const CityTempIndividual = require('../../models/rowData/rowDataModel');

module.exports.delete = async (callback) => {
  try {
      await CityTempIndividual.deleteOne({ _id: "6623439a83d7e8f64f6e618c" });
      return callback(null,);
  } catch (error) {
        console.error('Error deleting data into MongoDB:', error);
        return callback({ error: 'Error deleting data into MongoDB' });
  }
}

module.exports.delete1 = async (callback) => {
      const AvgTemperature = -36.7;
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
            const day = 8;
            const year = 1997; 
            const city = "Seattle";
 
            await CityTemperature.updateOne(
                { "City": city },
                { $pull: { "Temperatures": { "Day": day, "Year": year } }});
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
