// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import StudentR from './components/Registration_forms/student';
import UniversityR from './components/Registration_forms/university';
import OPartyR from './components/Registration_forms/OParty';
import StudentH from "./components/Home/student";
import UniversityH from "./components/Home/university";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'
import $ from 'jquery';
import Records from './components/records';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
         
            <Route path="/" element={<Records />} />
            <Route path="/reg_stu" element={<StudentR />} />
            <Route path="/reg_uni" element={<UniversityR />} />
            <Route path="/reg_Opa" element={<OPartyR />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
