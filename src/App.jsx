// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import StudentR from './pages/Registration_forms/student';
import UniversityR from './pages/Registration_forms/university';
import OPartyR from './pages/Registration_forms/OParty';
import StudentH from "./pages/Home/student";
import UniversityH from "./pages/Home/university";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'
import $ from 'jquery';
import Records from './components/Urecords';
import Notification from './components/Unotification';
import OpartyH from "./pages/Home/OParty"
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
         
            <Route path="/" element={<StudentH />} />
            <Route path="/reg_stu" element={<StudentR />} />
            <Route path="/reg_uni" element={<UniversityR />} />
            <Route path="/reg_Opa" element={<OPartyR />} />
            <Route path="/notifications" element={<Notification/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
