import React from 'react';
import { MyChart, data } from './Chart';

function Dashboard() {
  return (

          <div className="container">
              <div className="row">
            <div className="col-md-6">
            <MyChart />
            </div>
            <div className="col-md-6">
            <MyChart />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
            <MyChart />
            </div>
            <div className="col-md-4">
            <MyChart />
            </div>
            <div className="col-md-4">
            <MyChart />
            </div>
          </div>
          </div>
  );
}

export default Dashboard;
