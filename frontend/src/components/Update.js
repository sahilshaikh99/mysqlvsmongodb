import React from 'react';
import { MyChart, data } from './Chart';
import testData from '../testData.json';

function Update() {
  const labels = ['1', '10', '100', '1000', '10000', '100000', '1000000', '3000000'];

const exp1MongoData = Object.values(testData.update.exp1.mongodb).map(val => parseFloat(val));
 const exp1MysqlData = Object.values(testData.update.exp1.mysql).map(val => parseFloat(val));

 const exp2MongoData = Object.values(testData.update.exp2.mongodb).map(val => parseFloat(val));
 const exp2MysqlData = Object.values(testData.update.exp2.mysql).map(val => parseFloat(val));

 const exp3MongoData = Object.values(testData.update.exp3.mongodb).map(val => parseFloat(val));
 const exp3MysqlData = Object.values(testData.update.exp3.mysql).map(val => parseFloat(val));

 const exp4MongoData = Object.values(testData.update.exp4.mongodb).map(val => parseFloat(val));
 const exp4MysqlData = Object.values(testData.update.exp4.mysql).map(val => parseFloat(val));
  return (

          <div className="container">
              <div className="row">
              <div className="col-md-12">
              <MyChart title={"Update Comparison 1 - Updating one record by indexed field (ID)"} labels={labels} mongoData={exp1MongoData} mysqlData={exp1MysqlData}/>
              </div>
              <div className="col-md-12">
              <MyChart title={"Update Comparison 2 - Updating one record by non-indexed field"} labels={labels} mongoData={exp2MongoData} mysqlData={exp2MysqlData}/>
              </div>
              <div className="col-md-12">
              <MyChart title={"Updating Comparison 3 - Updating one record from Joined Tables with Multiple Conditions"} labels={labels} mongoData={exp3MongoData} mysqlData={exp3MysqlData}/>
              </div>
              <div className="col-md-12">
              <MyChart title={"Update Comparison 4 - Bulk Updating Average Temperature Records in Joined Tables"} labels={labels} mongoData={exp4MongoData} mysqlData={exp4MysqlData}/>
              </div>
            </div>
          </div>
  );
}

export default Update;
