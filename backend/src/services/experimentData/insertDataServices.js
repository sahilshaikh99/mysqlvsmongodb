const fs = require('fs');
const { processCSVFile } = require('../../helper/getTestData');

module.exports.insertData = async (data, callback) => {
  try {

    const oneData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/insert/${data.database}/${data.experiment}/1data/aggregatedata.csv`, 1);
    const tenData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/insert/${data.database}/${data.experiment}/10data/aggregatedata.csv`, 10);
    const hundredData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/insert/${data.database}/${data.experiment}/100data/aggregatedata.csv`, 100);
    const thousandData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/insert/${data.database}/${data.experiment}/1000data/aggregatedata.csv`, 1000);
    const tenThousandData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/insert/${data.database}/${data.experiment}/10000data/aggregatedata.csv`, 10000);
    const hundredThousandData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/insert/${data.database}/${data.experiment}/100000data/aggregatedata.csv`, 100000);
    const oneMillionData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/insert/${data.database}/${data.experiment}/1000000data/aggregatedata.csv`, 1000000);
    const threeMillionData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/insert/${data.database}/${data.experiment}/3000000data/aggregatedata.csv`, 3000000);

    let jsonData = fs.readFileSync('testData.json');
    let existingData = JSON.parse(jsonData);

    existingData.insert[data.experiment][data.database]['1'] = oneData.toString();
    existingData.insert[data.experiment][data.database]['10'] = tenData.toString();
    existingData.insert[data.experiment][data.database]['100'] = hundredData.toString();
    existingData.insert[data.experiment][data.database]['1000'] = thousandData.toString();
    existingData.insert[data.experiment][data.database]['10000'] = tenThousandData.toString();
    existingData.insert[data.experiment][data.database]['100000'] = hundredThousandData.toString();
    existingData.insert[data.experiment][data.database]['1000000'] = oneMillionData.toString();
    existingData.insert[data.experiment][data.database]['3000000'] = threeMillionData.toString();

    fs.writeFileSync('testData.json', JSON.stringify(existingData, null, 2));

    return callback(null, oneData);
  } catch (error) {
    console.error('Error performing MongoDB operations', error);
    throw error;
  }
}
