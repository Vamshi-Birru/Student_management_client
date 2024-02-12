import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import Sidebarcomponent from './Osidebar';
import Footer from './footer';
import { CDBCard } from 'cdbreact'; 

const RecordForm = () => {
 
  return (
    <>
    <div className="wrapper"  >
    <Sidebarcomponent />
    <div className='content-wrapper' style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' ,height:"68vh" }}>
    <form style={{width:'30rem'}}>
    
            <div style={{ background: 'black', borderRadius:'5px'}} className="text-center text-white">
              <p className="h5 mt-2 py-4 font-weight-bold" style={{borderRadius:'10%'}}>Contact Us</p>
            </div>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Enrollment ID' />
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this request'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4' block>
        Send Request
      </MDBBtn>
      
    </form>
    </div>
    </div>
    <Footer/>
    </>
  );
};
export default RecordForm;