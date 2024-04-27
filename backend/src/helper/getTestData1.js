const fs = require('fs');
const csv = require('csv-parser');

function calculateTotalElapsedTime(filename) {
  return new Promise((resolve, reject) => {
    let totalElapsedTime = 0;
    let rowCount = 0;

    fs.createReadStream(filename)
      .pipe(csv())
      .on('data', (row) => {
        totalElapsedTime += parseInt(row.elapsed);
        rowCount++;
      })
      .on('end', () => {
        if (rowCount === 0) {
          reject(new Error('No data found in CSV file'));
        } else if (rowCount === 1) {
          resolve({ totalElapsedTime, rowCount, singleRowElapsedTime: totalElapsedTime });
        } else {
          resolve({ totalElapsedTime, rowCount });
        }
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

module.exports.processCSVFile = async (filename) => {
  try {
    const { totalElapsedTime, rowCount, singleRowElapsedTime } = await calculateTotalElapsedTime(filename);

    console.log('Total Elapsed Time (milliseconds):', totalElapsedTime);
    console.log('Number of Rows:', rowCount);

    if (rowCount === 1) {
      console.log('Elapsed Time of Single Row (milliseconds):', singleRowElapsedTime);
      return singleRowElapsedTime;
    } else {
      // Calculate average time taken in milliseconds
      const averageTimeTakenMillis = totalElapsedTime / rowCount;
      console.log('Average Time Taken (milliseconds):', averageTimeTakenMillis);
      return averageTimeTakenMillis;
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
