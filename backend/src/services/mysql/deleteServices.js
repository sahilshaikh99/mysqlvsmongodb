const mysqlConnection = require('../../config/db');

module.exports.delete = async (callback) => {
      try {
        const query = `
            DELETE FROM city_temp_individual
            WHERE id = 2906327
            LIMIT 1`;
    
        mysqlConnection.query(query, (error, results) => {
          if (error) {
            console.error('Error deleting data:', error);
            return callback(error);
          }  
          console.log('Deleted records:', results.affectedRows);
          return callback(null, );
        });
      } catch (error) {
        console.error('Error deleting data from MySQL:', error);
        return callback({ error: 'Error deleting data from MySQL' });
      }
}
    
module.exports.delete1 = async (callback) => {
      try {
        const query = `
            DELETE FROM city_temp_individual
            WHERE AvgTemperature = 140.00
            LIMIT 1`;
            
        mysqlConnection.query(query, (error, results) => {
          if (error) {
            console.error('Error deleting data:', error);
            return callback(error);
          }  
          console.log('Deleted records:', results.affectedRows);
          return callback(null, );
        });
      } catch (error) {
        console.error('Error deleting data from MySQL:', error);
        return callback({ error: 'Error deleting data from MySQL' });
      }
}

module.exports.delete2 =  async (callback) => {
      try {
            const query = `
              DELETE t
              FROM temperature t
              JOIN city c ON t.city_id = c.city_id
              WHERE t.day = 31
              AND t.year = 2013
              AND t.month = 7
              AND c.name = 'San Juan Puerto Rico'
            `;
        
            mysqlConnection.query(query, (error, results) => {
              if (error) {
                console.error('Error deleting data:', error);
                return callback(error);
              }  
              console.log('Deleted records:', results.affectedRows);
              return callback(null, );
            });
          } catch (error) {
            console.error('Error deleting data from MySQL:', error);
            return callback({ error: 'Error deleting data from MySQL' });
          }
}

module.exports.delete3 = async (callback) => {
      try {
          mysqlConnection.query("DELETE FROM temperature", (error, results) => {
              if (error) {
                  console.error('Error deleting data from the temperature table:', error);
                  return callback(error);
              }
              mysqlConnection.query("DELETE FROM city", (error, results) => {
                  if (error) {
                      console.error('Error deleting data from the city table:', error);
                      return callback(error);
                  }
                  return callback(null);
              });
          });
      } catch (error) {
          console.error('Error deleting data from MySQL:', error);
          return callback({ error: 'Error deleting data from MySQL' });
      }
  };
  