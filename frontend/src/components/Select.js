import React from 'react';
import { MyChart, data } from './Chart';
import testData from '../testData.json';

function Select() {
  const labels = ['1', '10', '100', '1000', '10000', '100000', '1000000', '3000000'];

 // Extracting data from the JSON file
 const exp1MongoData = Object.values(testData.select.exp1.mongodb).map(val => parseFloat(val));
 const exp1MysqlData = Object.values(testData.select.exp1.mysql).map(val => parseFloat(val));

 const exp2MongoData = Object.values(testData.select.exp2.mongodb).map(val => parseFloat(val));
 const exp2MysqlData = Object.values(testData.select.exp2.mysql).map(val => parseFloat(val));

 const exp3MongoData = Object.values(testData.select.exp3.mongodb).map(val => parseFloat(val));
 const exp3MysqlData = Object.values(testData.select.exp3.mysql).map(val => parseFloat(val));

 const exp4MongoData = Object.values(testData.select.exp4.mongodb).map(val => parseFloat(val));
 const exp4MysqlData = Object.values(testData.select.exp4.mysql).map(val => parseFloat(val));

 const exp5MongoData = Object.values(testData.select.exp5.mongodb).map(val => parseFloat(val));
 const exp5MysqlData = Object.values(testData.select.exp5.mysql).map(val => parseFloat(val));

 const exp6MongoData = Object.values(testData.select.exp6.mongodb).map(val => parseFloat(val));
 const exp6MysqlData = Object.values(testData.select.exp6.mysql).map(val => parseFloat(val));
  return (

          <div className="container">
              <div className="row">
            <div className="col-md-12">
            <MyChart title={"Select Comparison 1 - Selecting one record by indexed field (ID)"} labels={labels} mongoData={exp1MongoData} mysqlData={exp1MysqlData}/>
            </div>
            <div className="col-md-12">
            <MyChart title={"Select Comparison 2 - Selecting one record by non-indexed field"} labels={labels} mongoData={exp2MongoData} mysqlData={exp2MysqlData}/>
            </div>
            <div className="col-md-12">
            <MyChart title={"Select Comparison 3 - Selecting Records from Joined Tables with Multiple Conditions"} labels={labels} mongoData={exp3MongoData} mysqlData={exp3MysqlData}/>
            </div>
            <div className="col-md-12">
            <MyChart title={"Select Comparison 4 - Selecting Records with a Specific City and Calculating Average Temperature"} labels={labels} mongoData={exp4MongoData} mysqlData={exp4MysqlData}/>
            </div>
            <div className="col-md-12">
            <MyChart title={"Select Comparison 5 - Selecting Cities with Their Minimum and Maximum Temperatures"} labels={labels} mongoData={exp5MongoData} mysqlData={exp5MysqlData}/>
            </div>
            <div className="col-md-12">
            <MyChart title={"Select Comparison 6 - Selecting Cities with the Greatest Temperature Fluctuation from joined related tables"} labels={labels} mongoData={exp6MongoData} mysqlData={exp6MysqlData}/>
            </div>
          </div>
          </div>
  );
}

export default Select;
