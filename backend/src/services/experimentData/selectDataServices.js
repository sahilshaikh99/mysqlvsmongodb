const fs = require('fs');
const { processCSVFile } = require('../../helper/getTestData');

module.exports.selectData = async (data, callback) => {
  try {
    const oneData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/select/${data.database}/${data.experiment}/data.csv`, data.threads);
    const tenData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/select/${data.database}/${data.experiment}/data.csv`, data.threads);
    const hundredData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/select/${data.database}/${data.experiment}/data.csv`, data.threads);
    const thousandData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/select/${data.database}/${data.experiment}/data.csv`, data.threads);
    const tenThousandData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/select/${data.database}/${data.experiment}/data.csv`, data.threads);
    const hundredThousandData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/select/${data.database}/${data.experiment}/data.csv`, data.threads);
    const oneMillionData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/select/${data.database}/${data.experiment}/data.csv`, data.threads);
    const threeMillionData = await processCSVFile(`/Users/mohammadsahilshaikh/Desktop/project/experiments-data/select/${data.database}/${data.experiment}/data.csv`, data.threads);

    let jsonData = fs.readFileSync('testData.json');
    let existingData = JSON.parse(jsonData);

    existingData.select[data.experiment][data.database]['1'] = oneData.toString();
    existingData.select[data.experiment][data.database]['10'] = tenData.toString();
    existingData.select[data.experiment][data.database]['100'] = hundredData.toString();
    existingData.select[data.experiment][data.database]['1000'] = thousandData.toString();
    existingData.select[data.experiment][data.database]['10000'] = tenThousandData.toString();
    existingData.select[data.experiment][data.database]['100000'] = hundredThousandData.toString();
    existingData.select[data.experiment][data.database]['1000000'] = oneMillionData.toString();
    existingData.select[data.experiment][data.database]['3000000'] = threeMillionData.toString();

    fs.writeFileSync('testData.json', JSON.stringify(existingData, null, 2));

    return callback(null, oneData);
  } catch (error) {
    console.error('Error performing MongoDB operations', error);
    throw error;
  }
}
