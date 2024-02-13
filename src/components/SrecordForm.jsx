import React, { useState } from 'react';
import Footer from './footer';
import Sidebarcomponent from "./Ssidebar";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import "../styles/Srecord.css"

export default function SrecordForm() {
    const initialValues = {
        semester1: 0,
        semester2: 0,
        semester3: 0,
        semester4: 0,
        semester5: 0,
        semester6: 0,
        semester7: 0,
        semester8: 0
      };
    
      const [values, setValues] = useState(initialValues);

  

  const handleChange = (key, event) => {
    let { value } = event.target;
   
    value = parseFloat(value);
   
    if (value < 0) {
      value = 0; 
    } else if (value > 10) {
      value = 10;
    }
    setValues(prevState => ({
      ...prevState,
      [key]: value
    }));
  };
  const handleReset = () => {
    setValues(initialValues);
  };

  return (
    <>
      <div className="wrapper">
        <Sidebarcomponent />
        <div className='content-wrapper' style={{marginTop:'0', display:'flex',flexDirection:'column',  justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{marginTop:'10vh'}}>Student Record Upload</h1>
          <MDBTable responsive>
            <MDBTableHead dark>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Semester-1</th>
                <th scope='col'>Semester-2</th>
                <th scope='col'>Semester-3</th>
                <th scope='col'>Semester-4</th>
                <th scope='col'>Semester-5</th>
                <th scope='col'>Semester-6</th>
                <th scope='col'>Semester-7</th>
                <th scope='col'>Semester-8</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <th scope='row'>1</th>
                <td>
                  
                  <input className='marks-input' type="number" value={values.semester1} onChange={(e) => handleChange('semester1', e)} step={'0.1'}/>
                 
                </td>
                <td>
                  
                  <input className='marks-input' type="number" value={values.semester2} onChange={(e) => handleChange('semester2', e)} step={'0.1'}  />
                  
                </td>
                <td>
                  
                  <input className='marks-input' type="number" value={values.semester3} onChange={(e) => handleChange('semester3', e)}  step={'0.1'} />
                 
                </td>
                <td>
                
                  <input className='marks-input' type="number" value={values.semester4} onChange={(e) => handleChange('semester4', e)}  step={'0.1'} />
                  
                </td>
                <td>
                 
                  <input className='marks-input' type="number" value={values.semester5} onChange={(e) => handleChange('semester5', e)} step={'0.1'} />
                  
                </td>
                <td>
                  
                  <input className='marks-input' type="number" value={values.semester6} onChange={(e) => handleChange('semester6', e)} step={'0.1'} />
                  
                </td>
                <td>
                  
                  <input className='marks-input' type="number" value={values.semester7} onChange={(e) => handleChange('semester7', e)} step={'0.1'} />
                  
                </td>
                <td>
                 
                  <input className='marks-input' type="number" value={values.semester8} onChange={(e) => handleChange('semester8', e)} step={'0.1'}  />
                  
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
          <div className='text-center mt-3'>
            <MDBBtn color="success" className="me-2"> <CheckIcon/> Submit</MDBBtn>
            <MDBBtn color="danger" className='me-2' onClick={()=>handleReset()} > <RestartAltIcon/> Reset</MDBBtn>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
