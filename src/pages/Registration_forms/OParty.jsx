import React from 'react';
import "../../styles/Registration_forms/Oparty.css"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  
}
from 'mdb-react-ui-kit';
import Footer from '../../components/footer';
import Layout from '../../components/footer';


function OParty() {
  return (
    <>
    <Layout/>
    <MDBContainer fluid className='Oparty'>

      <MDBRow className='d-flex justify-content-center align-items-center '>

        <MDBCol lg='5' >

          <MDBCard className='my-5 rounded-3 ' style={{maxWidth: '600px'}}>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp' className='w-100 rounded-top'  alt="Sample photo"/>

            <MDBCardBody className='px-5'>

              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
              <MDBInput wrapperClass='mb-4' label='Name of Organisation' id='form1' type='text'/>
              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='text'/>
              <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'/>
             
             
              <MDBBtn color='success' className='mb-4' size='lg'>Submit</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    <Footer/>
    </>
  );
}

export default OParty;