import React from 'react';
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

function User() {
  return (
    <MDBContainer fluid className='bg-dark'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded-start" fluid />
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex  flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">Student registration form</h3>
                </MDBCardBody>
                <MDBCardBody className='text-black d-flex  flex-column justify-content-center'>
                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' />
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' />
                    </MDBCol>

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Enrollment Number' size='lg' id='form3' type='text' />

                  <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
                  </div>

                  <MDBRow>
                    <MDBCol md='6'>
                      <div className='mb-4'>

                        <select className='form-select form-select-lg' id='Branch' style={{ fontSize: '16px' }}>
                          <option value='1'>--Select Branch--</option>
                          <option value='2'>Applied Geology</option>
                          <option value='3'>Architecture</option>
                          <option value='4'>Bio Medical Engineering</option>
                          <option value='5'>Bio Technology</option>
                          <option value='6'>Chemical Engineering</option>
                          <option value='7'>Civil Engineering</option>
                          <option value='8'>Computer Science & Engineering</option>
                          <option value='9'>Department of Chemistry</option>
                          <option value='10'>Department of Computer Application</option>
                          <option value='11'>Department of Mathematics</option>
                          <option value='12'>Department of Physics</option>
                          <option value='13'>Electrical Engineering</option>
                          <option value='14'>Electronics and Communication Engineering</option>
                          <option value='15'>Information Technology</option>
                          <option value='16'>Mechanical Engineering</option>
                          <option value='17'>Mining Engineering</option>
                          <option value='18'>Metallurgical and Materials Engineering</option>
                          <option value='19'>Workshop</option>
                        </select>
                      </div>

                    </MDBCol>

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Roll No' size='lg' id='form5' type='text' />
                  <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form6' type='text' />

                  <div className="d-flex flex-column align-items-center pt-3">
            
                    <MDBBtn className='mt-2 mb-2' color='warning' size='lg'>Submit form</MDBBtn>
                    <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                  </div>

                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default User;
