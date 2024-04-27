
const CityTemperature = require('../../models/SingleCollection/SingleCollectionModel');
const CityTempIndividual = require('../../models/rowData/rowDataModel');


module.exports.select =  async (callback) => {
      try {
             const results =  await CityTempIndividual.findOne({ _id: "662706e5458da8c3919d6a36" }, { _id: 1, City: 1, Day: 1,
              Month: 1,
              Year: 1,
              AvgTemperature: 1 }).lean();

            return callback(null, results);
          } catch (error) {
            console.error('Error selecting data from MongoDB:', error);
            return callback({ error: 'Error selecting data from MongoDB' });
          }
}

module.exports.select1 =  async (callback) => {
    const AvgTemperature = 140;
    try {
      const results = await CityTempIndividual.findOne({ 'AvgTemperature' : AvgTemperature }, { _id: 0, City: 1, Day: 1,
        Month: 1,
        Year: 1,
        AvgTemperature: 1 }).lean();
      return callback(null, results);
    } catch (error) {
          console.error('Error deleting data into MongoDB:', error);
          return callback({ error: 'Error deleting data into MongoDB' });
    }
}

module.exports.select2 =  async (callback) => {
      try {
            // const query = {
            //       'City': 'Orlando',
            //       'Temperatures.Day': 1,
            //       'Temperatures.Month': 1,
            //       'Temperatures.Year': 1995
            //   };
              
            //   const pipeline = [
            //       // Match documents based on the initial query conditions
            //       { $match: query },
              
            //       // Filter out unnecessary documents by projecting only required fields
            //       {
            //           $project: {
            //               _id: 0,
            //               City: 1,
            //               State: 1,
            //               Country: 1,
            //               Region: 1,
            //               Temperatures: {
            //                   $filter: {
            //                       input: '$Temperatures',
            //                       as: 'temp',
            //                       cond: {
            //                           $and: [
            //                               { $eq: ['$$temp.Day', 1] },
            //                               { $eq: ['$$temp.Month', 1] },
            //                               { $eq: ['$$temp.Year', 1995] }
            //                           ]
            //                       }
            //                   }
            //               }
            //           }
            //       },
              
            //       // Group the documents by city details and push matching temperatures into an array
            //       {
            //           $group: {
            //               _id: {
            //                   City: '$City',
            //                   State: '$State',
            //                   Country: '$Country',
            //                   Region: '$Region'
            //               },
            //               Temperatures: { $push: '$Temperatures' }
            //           }
            //       },
              
            //       // Project the final result to flatten the Temperatures array
            //       {
            //           $project: {
            //               _id: 0,
            //               City: '$_id.City',
            //               State: '$_id.State',
            //               Country: '$_id.Country',
            //               Region: '$_id.Region',
            //               Temperatures: 1
            //           }
            //       }
            //   ];
              
            const query = {
              'City': 'San Juan Puerto Rico',
              'Temperatures.Day': 31,
              'Temperatures.Month': 7,
              'Temperatures.Year': 2013
            };

             const results =  await CityTemperature.find((query), { _id: 1, City: 1, Region: 1,
              Country: 1}).lean();

            return callback(null, results);
          } catch (error) {
            console.error('Error selecting data from MongoDB:', error);
            return callback({ error: 'Error selecting data from MongoDB' });
          }
}

module.exports.select3 =  async (callback) => {
  const city = 'San Juan Puerto Rico';
      try {
            const results =  await CityTemperature.aggregate([
                  { $match: { City: city } },
                  { $unwind: "$Temperatures" },
                  {
                    $group: {
                      _id: "$City",
                      avg_temp: { $avg: "$Temperatures.AvgTemperature" }
                    }
                  }
                ]).exec();
                console.log(results);
            return callback(null, results);
          } catch (error) {
            console.error('Error selecting data from MongoDB:', error);
            return callback({ error: 'Error selecting data from MongoDB' });
          }
}

module.exports.select4 =  async (callback) => {
      try {            
            const results = await CityTemperature.aggregate([
                  { 
                      $unwind: "$Temperatures" },
                  {
                      $group: {
                          _id: "$City",
                          max_temperature: { $max: "$Temperatures.AvgTemperature" },
                          min_temperature: { $min: "$Temperatures.AvgTemperature" }
                      }
                  }
              ]).exec();

            return callback(null, results);
          } catch (error) {
            console.error('Error selecting data from MongoDB:', error);
            return callback({ error: 'Error selecting data from MongoDB' });
          }
}

module.exports.select5 = async (callback) => {
  try {
      const results = await CityTemperature.aggregate([
          { $unwind: "$Temperatures" },
          {
              $group: {
                  _id: "$City",
                  temp_fluctuation: {
                      $subtract: [
                          { $max: "$Temperatures.AvgTemperature" },
                          { $min: "$Temperatures.AvgTemperature" }
                      ]
                  }
              }
          },
          { $sort: { temp_fluctuation: -1 } }
      ]).exec();

      return callback(null, results);
  } catch (error) {
      console.error('Error selecting data from MongoDB:', error);
      return callback({ error: 'Error selecting data from MongoDB' });
  }
}
