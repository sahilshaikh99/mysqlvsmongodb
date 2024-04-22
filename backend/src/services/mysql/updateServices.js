const mysqlConnection = require('../../config/db');

module.exports.update =  async (callback) => {
      try {
          const id = 2807688;
          const newTemperature = 80.0;
          
          const query = `UPDATE city_temp_individual 
          SET AvgTemperature = ?
          WHERE id = ?
          LIMIT 1`;
          
          mysqlConnection.query(query, [newTemperature, id], (error, results, fields) => {
                if (error) {
                  console.error('Error updating data:', error);
                  return callback(error);
                }
                return callback(null, );
              });
      } catch (error) {
            console.error('Error updating data into MySQL:', error);
            return callback({ error: 'Error updating data into MySQL' });
      }
    }

    module.exports.update1 =  async (callback) => {
      try {
            const newTemperature = 90.0;
            
            const query = `UPDATE city_temp_individual 
            SET AvgTemperature = ?
            WHERE AvgTemperature = -36.70
            LIMIT 1`;
            
            mysqlConnection.query(query, [newTemperature], (error, results, fields) => {
                  if (error) {
                    console.error('Error updating data:', error);
                    return callback(error);
                  }
                  return callback(null, );
                });
        } catch (error) {
              console.error('Error updating data into MySQL:', error);
              return callback({ error: 'Error updating data into MySQL' });
        }
    }

module.exports.update2 =  async (callback) => {
  try {
      const cityName = "Seattle";
      const day = 8;
      const newTemperature = 79.20;
      
      const query = `UPDATE temperature t
        JOIN city c ON t.city_id = c.city_id
        SET t.avg_temperature = ?
        WHERE c.name = ? AND t.day = ?`;
      
      mysqlConnection.query(query, [newTemperature, cityName, day], (error, results, fields) => {
            if (error) {
              console.error('Error updating data:', error);
              return callback(error);
            }
            return callback(null, );
          });
  } catch (error) {
        console.error('Error updating data into MySQL:', error);
        return callback({ error: 'Error updating data into MySQL' });
  }
}

module.exports.update3 =  async (callback) => {
      try {
            const query = `UPDATE temperature t
                        JOIN city c ON t.city_id = c.city_id
                        SET t.avg_temperature = t.avg_temperature - 2.0
                        WHERE c.region = 'North America'`;
            mysqlConnection.query(query, (error, results) => {
                  if (error) {
                        console.error('Error retrieving data:', error);
                        return callback(error);
                  }
                  return callback(null,);
            });
      } catch (error) {
            console.error('Error updating data into MySQL:', error);
            return callback({ error: 'Error updating data into MySQL' });
      }
}
