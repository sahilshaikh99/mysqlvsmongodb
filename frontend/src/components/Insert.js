import React from 'react';
import { MyChart, data } from './Chart';
import testData from '../testData.json';

function Insert() {
  const labels = ['1', '10', '100', '1000', '10000', '100000', '1000000', '3000000'];

const exp1MongoData = Object.values(testData.insert.exp1.mongodb).map(val => parseFloat(val) * 1000);
 const exp1MysqlData = Object.values(testData.insert.exp1.mysql).map(val => parseFloat(val) * 1000);

 const exp2MongoData = Object.values(testData.insert.exp2.mongodb).map(val => parseFloat(val) * 1000);
 const exp2MysqlData = Object.values(testData.insert.exp2.mysql).map(val => parseFloat(val) * 1000);

//  const exp3MongoData = Object.values(testData.delete.exp3.mongodb).map(val => parseFloat(val));
//  const exp3MysqlData = Object.values(testData.delete.exp3.mysql).map(val => parseFloat(val));

//  const exp4MongoData = Object.values(testData.delete.exp4.mongodb).map(val => parseFloat(val));
//  const exp4MysqlData = Object.values(testData.delete.exp4.mysql).map(val => parseFloat(val));
  return (

          <div className="container">
              <div className="row">
                <div className="col-md-12">
                <MyChart title={"Insert Experiment 1 - MongoDB vs MySQL"} labels={labels} mongoData={exp1MongoData} mysqlData={exp1MysqlData}/>
                </div>
                <div className="col-md-12">
                <MyChart title={"Insert Experiment 2 - MongoDB vs MySQL"} labels={labels} mongoData={exp2MongoData} mysqlData={exp2MysqlData}/>
                </div>
            </div>
          </div>
  );
}

export default Insert;
