import React from 'react';
import { HorizontalChart, data } from './HorizontalChart';

function Resource() {
  return (

              <div className="row">
                    <div className="col-md-6">
                    <HorizontalChart title={"Storage Data"}/>
                    </div>
                    <div className="col-md-6">
                    <HorizontalChart title={"Storage Data"}/>
                    </div>
                <   div className="row mt-3">
                    <div className="col-md-4">
                    <HorizontalChart title={"Storage Data"}/>
                    </div>
                    <div className="col-md-4">
                    <HorizontalChart title={"Storage Data"}/>
                    </div>
                    <div className="col-md-4">
                    <HorizontalChart title={"Storage Data"}/>
                    </div>
                </div>
                </div>
  );
}

export default Resource;
