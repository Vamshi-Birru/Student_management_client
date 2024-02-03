import React from 'react';
import { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,

}
  from 'mdb-react-ui-kit';
const Student = () => {
  const containerStyle = {
    width: '98.79vw', // 100% of viewport width
    height: '100vh', // 100% of viewport height
    overflow: 'hidden', // Ensure the image doesn't overflow
  };

  const imageStyle = {
    width: '100%', // Take up 100% of container width
    height: '100%', // Take up 100% of container height
    objectFit: 'cover', // Maintain aspect ratio and cover the container
  };

  const formStyle = {
    position: 'absolute', // Position the form absolutely within the container
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%) ',
    width: '700px', // Set the desired width
    height: '680px', // Center the form precisely
    padding: '20px', // Adjust padding as needed
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // Transparent white background
    borderRadius: '8px', // Optional: Add rounded corners
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://wallpapers-hub.art/wallpaper-images/546727.jpg"
        alt="Description of the image"
        style={imageStyle}
      />
      <div style={formStyle}>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol md='10'>

          <MDBCard className='my-4' style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>

            <MDBRow className='g-0'>
              <MDBCol md='11'>

                <MDBCardBody className='text-black d-flex  flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold ">Student registration form</h3>
                </MDBCardBody>
        
                <MDBCardBody className='text-black d-flex  flex-column justify-content-center'>
                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'  style={{ height: '40px', width: '220px' }} />
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'  style={{ height: '40px', width: '220px' }} />
                    </MDBCol>

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Enrollment Number' size='lg' id='form3' type='text' />

                  <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='0' label='Female'  />
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='1' label='Male'  />
                    <MDBRadio name='inlineRadio' id='inlineRadio3' value='2' label='Other' />
                  </div>
                  <MDBInput wrapperClass='mb-4' label='Phone No' size='lg' id='form5' type='text'  />
                  <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form6' type='text' />

                  <div className="d-flex flex-column align-items-center pt-3">
            
                    <MDBBtn className='mt-2' color='warning' size='lg' >Submit form</MDBBtn>
                    <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                  </div>

                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>
      </div>
    </div>
  );
}

export default Student;
