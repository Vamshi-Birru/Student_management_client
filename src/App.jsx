// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import Student from './components/Registration_forms/student';
import University from './components/Registration_forms/university';
import OParty from './components/Registration_forms/OParty';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/reg_stu" element={<Student />} />
            <Route path="/reg_uni" element={<University />} />
            <Route path="/reg_Opa" element={<OParty />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
