const csv = require('csv-parser');
const fs = require('fs');

// Function to insert data into MongoDB
module.exports.getCSVdata = async (volume) => {

    const filePath = process.env.DATA_FILE + ".csv";
    const MAX_RECORDS = volume; // Maximum number of records to process


    const temperatures = [];
    let recordCount = 0;
  
    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => {
          if (recordCount >= MAX_RECORDS) {
            // Stop reading from the file if maximum records reached
            resolve(temperatures);
            return;
          }
          const temperatureData = {
            Region: data.Region,
            Country: data.Country,
            State: data.State || '',
            City: data.City,
            Month: data.Month,
            Day: data.Day,
            Year: data.Year,
            AvgTemperature: data.AvgTemperature
          };
          temperatures.push(temperatureData);
          recordCount++;
        })
        .on('end', () => resolve(temperatures))
        .on('error', reject);
    });
};

// Function to parse data from CSV file
module.exports.getCSVdataNested = async (volume) => {
  const filePath = process.env.DATA_FILE + ".csv";
  const MAX_RECORDS = volume;
  const cityMap = new Map(); 
  var counter = 0;
  console.log('hello');

  return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
          .pipe(csv())
          .on('data', (data) => {
              if (counter >= MAX_RECORDS) {
                  // Stop reading from the file if maximum records reached
                  resolve(Array.from(cityMap.values()));
                  return;
              }
              const cityKey = `${data.Region}-${data.Country}-${data.State || ''}-${data.City}`;
              if (!cityMap.has(cityKey)) {
                  cityMap.set(cityKey, {
                      City: data.City,
                      State: data.State || '',
                      Country: data.Country,
                      Region: data.Region,
                      Temperatures: []
                  });
              }
              cityMap.get(cityKey).Temperatures.push({
                  Day: data.Day,
                  Month: data.Month,
                  Year: data.Year,
                  AvgTemperature: data.AvgTemperature
              });
              counter++;
          })
          .on('end', () => resolve(Array.from(cityMap.values())))
          .on('error', reject);
  });
}


// Function to extract unique city data from CSV
module.exports.getCSVCityData = async (volume) => {
    const filePath = process.env.DATA_FILE + ".csv";
    const MAX_RECORDS = volume;

    const citiesSet = new Set(); // Using a Set to ensure uniqueness
    const cities = []; // Array to store unique city objects

    let recordCount = 0;

    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => {
                if (recordCount >= MAX_RECORDS) {
                    resolve(cities);
                    return;
                }

                const city = {
                    name: data.City,
                    country: data.Country,
                    state: data.State || '',
                    region: data.Region
                };

                // Check if the city already exists in the set
                const cityKey = `${city.name}_${city.country}_${city.state}_${city.region}`;
                if (!citiesSet.has(cityKey)) {
                    cities.push(city); 
                    citiesSet.add(cityKey);
                }

                recordCount++;
            })
            .on('end', () => resolve(cities))
            .on('error', reject);
    });
}


// Function to extract temperature data from CSV
module.exports.getCSVTemperatureData = async (volume, cityIdMap) => {
  const filePath = process.env.DATA_FILE + ".csv";
  const MAX_RECORDS = volume;

  const temperatures = [];
  let recordCount = 0;

  return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
          .pipe(csv())
          .on('data', (data) => {
              if (recordCount >= MAX_RECORDS) {
                  resolve(temperatures);
                  return;
              }

              const cityName = data.City.trim().toLowerCase();

              if (cityIdMap.has(cityName)) {
                  const city_id = cityIdMap.get(cityName);
                  const temperature = {
                      city_id: city_id,
                      day: data.Day,
                      month: data.Month,
                      year: data.Year,
                      avg_temperature: data.AvgTemperature
                  };
                  temperatures.push(temperature);
              } else {
                  console.error(`City ID not found for city: ${data.City}`);
                  // Handle missing city based on your requirement
                  // Example: Skip temperature record or assign default city ID
              }

              recordCount++;
          })
          .on('end', () => resolve(temperatures))
          .on('error', reject);
  });
}
