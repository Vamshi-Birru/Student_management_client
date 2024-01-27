
import './App.css';
import Student from "./components/Registration_forms/student"
import University from './components/Registration_forms/university';
import OParty from './components/Registration_forms/OParty';

function App() {
  return (
    <div className="App">
      <Student/>
      <OParty/>
      <University/>
      
    </div>
  );
}

export default App;
