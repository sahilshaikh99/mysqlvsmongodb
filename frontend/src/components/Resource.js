import React from 'react';
import { SpaceChart, data } from './SpaceChart';
import testData from '../spaceData.json';

function Resource() {
  const labels = ['1', '10', '100', '1000', '10000', '100000', '1000000', '3000000'];

  // Function to convert KB to MB
  const kbToMb = (kb) => {
    return (kb / 1024).toFixed(2);
  };

  const spaceMongoData = Object.values(testData.storageSize.mongodb).map(val => kbToMb(parseFloat(val)));
  const spaceMysqlData = Object.values(testData.storageSize.mysql).map(val => kbToMb(parseFloat(val)));

  const indexMongoData = Object.values(testData.indexSize.mongodb).map(val => kbToMb(parseFloat(val)));
  const indexMysqlData = Object.values(testData.indexSize.mysql).map(val => kbToMb(parseFloat(val)));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <SpaceChart title={"MongoDB and MySQL Data Storage Size (MB)"} labels={labels} mongoData={spaceMongoData} mysqlData={spaceMysqlData}/>
        </div>
        <div className="col-md-12">
          <SpaceChart title={"MongoDB and MySQL Index Size (MB)"} labels={labels} mongoData={indexMongoData} mysqlData={indexMysqlData}/>
        </div>
      </div>
    </div>
  );
}

export default Resource;
