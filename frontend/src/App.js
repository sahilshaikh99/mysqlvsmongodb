import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/MenuBar';
import { MyChart, data } from './components/Chart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Insert from './components/Insert';
import Select from './components/Select';
import Update from './components/Update';
import Delete from './components/Delete';
import Resource from './components/Resource';

function App() {
  return (
    <Router>

    <div className="App">
      <MenuBar />
          <div className="container">
          <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/insert" element={<Insert />} />
              <Route path="/select" element={<Select />} />
              <Route path="/update" element={<Update />} />
              <Route path="/delete" element={<Delete />} />
              <Route path="/resource" element={<Resource />} />
          </Routes>
          </div>
    </div>
    </Router>
  );
}

export default App;
