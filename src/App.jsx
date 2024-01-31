// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import StudentR from './components/Registration_forms/student';
import UniversityR from './components/Registration_forms/university';
import OPartyR from './components/Registration_forms/OParty';
import StudentH from "./components/Home/student"

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<StudentH />} />
            <Route path="/reg_stu" element={<StudentR />} />
            <Route path="/reg_uni" element={<UniversityR />} />
            <Route path="/reg_Opa" element={<OPartyR />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
