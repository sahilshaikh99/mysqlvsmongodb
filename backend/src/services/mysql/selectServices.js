const mysqlConnection = require('../../config/db');

module.exports.select =  async (callback) => {

  try {
      const query = `SELECT * FROM city_temp_individual WHERE id = '2906327' limit 1`;

      mysqlConnection.query(query, (error, results) => {
            if (error) {
            console.error('Error retrieving data:', error);
            return callback(error);
            }
            return callback(null, results);
      });
      } catch (error) {
            console.error('Error selecting data into mysql:', error);
            return callback({ error: 'Error selecting data into mysql' });
      }
}

module.exports.select1 =  async (callback) => {
  try {
        const temperature = 140.00;
        
      const query = `SELECT * FROM city_temp_individual WHERE AvgTemperature = ? limit 1`;

      mysqlConnection.query(query, [temperature] ,(error, results) => {
            if (error) {
            console.error('Error retrieving data:', error);
            return callback(error);
            }
            return callback(null, results);
      });
      } catch (error) {
            console.error('Error selecting data into mysql:', error);
            return callback({ error: 'Error selecting data into mysql' });
      }
}

module.exports.select2 =  async (callback) => {
  
      try {
          const query = `
          SELECT t.*, c.name AS city_name, c.country, c.region
          FROM temperature t
          JOIN city c ON t.city_id = c.city_id
          WHERE t.city_id = 1971834 AND t.day = 31 AND t.month = 7 AND t.year = 2013
        `;
        
        mysqlConnection.query(query, (error, results) => {
          if (error) {
            console.error('Error retrieving data:', error);
            return callback(error);
          }
          return callback(null, results);
        });
      } catch (error) {
            console.error('Error selecting data into mysql:', error);
            return callback({ error: 'Error selecting data into mysql' });
      }
    }

    module.exports.select3 =  async (callback) => {
      try {
          const query = `SELECT city_id, AVG(avg_temperature) AS avg_temp FROM temperature where city_id = 1971834 GROUP BY city_id`;
    
        mysqlConnection.query(query, (error, results) => {
          if (error) {
            console.error('Error retrieving data:', error);
            return callback(error);
          }
          return callback(null, results);
        });
      } catch (error) {
            console.error('Error selecting data into mysql:', error);
            return callback({ error: 'Error selecting data into mysql' });
      }
    };
    
    module.exports.select4 =  async (callback) => {
      try {
          const query = `SELECT city_id, MAX(avg_temperature) AS max_temperature, MIN(avg_temperature) AS min_temperature
          FROM temperature
          GROUP BY city_id`;
    
        mysqlConnection.query(query, (error, results) => {
          if (error) {
            console.error('Error retrieving data:', error);
            return callback(error);
          }
          return callback(null, results);
        });
      } catch (error) {
            console.error('Error selecting data into mysql:', error);
            return callback({ error: 'Error selecting data into mysql' });
      }
    };
    

    module.exports.select5 =  async (callback) => {
      try {
          const query = `SELECT c.name, c.country, c.region, MAX(t.avg_temperature) - MIN(t.avg_temperature) AS temp_fluctuation
          FROM city c
          JOIN temperature t ON c.city_id = t.city_id
          GROUP BY c.city_id
          ORDER BY temp_fluctuation DESC`;
    
        mysqlConnection.query(query, (error, results) => {
          if (error) {
            console.error('Error retrieving data:', error);
            return callback(error);
          }
          return callback(null, results);
        });
      } catch (error) {
            console.error('Error selecting data into mysql:', error);
            return callback({ error: 'Error selecting data into mysql' });
      }
    };

