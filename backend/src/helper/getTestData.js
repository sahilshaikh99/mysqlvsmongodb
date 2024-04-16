const fs = require('fs');
const csv = require('csv-parser');
const { timeEnd } = require('console');

// Function to extract timestamps for specified indices
function extractTimestamps(filename, startIndex, endIndex) {
  return new Promise((resolve, reject) => {
    const timestamps = [];

    fs.createReadStream(filename)
      .pipe(csv())
      .on('data', (row) => {
        timestamps.push(parseInt(row.timeStamp));
      })
      .on('end', () => {
        // Extract timestamps for the specified indices
        const startTimestamp = timestamps[startIndex - 1]; // Adjust index to 0-based
        const endTimestamp = timestamps[endIndex - 1]; // Adjust index to 0-based
        resolve({ startTimestamp, endTimestamp });
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}
// Function to calculate the average time taken
function calculateAverageTime(elapsedTimes) {
  const totalElapsedTime = elapsedTimes.reduce((acc, curr) => acc + curr, 0);
  const averageTime = totalElapsedTime / elapsedTimes.length;
  return averageTime;
}

// Function to calculate the elapsed time between start and end timestamps
function calculateElapsedTime(startTimestamp, endTimestamp) {
  return endTimestamp - startTimestamp;
}

module.exports.processCSVFile = async (filename, stepSize) => {
  let startIndex = 1;
  let endIndex = stepSize;
  const elapsedTimes = [];

  while (true) {
    try {
      const { startTimestamp, endTimestamp } = await extractTimestamps(filename, startIndex, endIndex);
      if (!startTimestamp || !endTimestamp) break; // If either timestamp is undefined, break the loop
      
      // Calculate elapsed time
      const elapsedTime = calculateElapsedTime(startTimestamp, endTimestamp);
      elapsedTimes.push(elapsedTime);

      // Move to the next batch
      startIndex += stepSize;
      endIndex += stepSize;
    } catch (error) {
      console.error('Error:', error);
      break;
    }
  }

  // Calculate average time taken in milliseconds
  const averageTimeTakenMillis = calculateAverageTime(elapsedTimes);

  // Convert milliseconds to seconds
  const averageTimeTakenSecs = averageTimeTakenMillis / 1000;

  console.log('Average Time Taken (seconds):', averageTimeTakenSecs);
  return averageTimeTakenSecs;
}
