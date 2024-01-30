import React, { useState } from 'react';
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
  const [fname,setFname]=useState();
  const [lname,setLname]=useState();
  const [enroll,setEnroll]=useState();
  const [gender,setGender]=useState();
  const [branch,setBranch]=useState();
  const [phone,setPhone]=useState();
  const [email,setEmail]=useState();

  const handleSubmit=()=>{
      
  }
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
                      <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' onChange={(e)=>setFname(e.target.value)} />
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' onChange={(e)=>setLname(e.target.value)} />
                    </MDBCol>

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Enrollment Number' size='lg' id='form3' type='text' onChange={(e)=>setEnroll(e.target.value)} />

                  <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='0' label='Female' inline onChange={(e)=>setGender(e.target.value)}/>
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='1' label='Male' inline onChange={(e)=>setGender(e.target.value)}/>
                    <MDBRadio name='inlineRadio' id='inlineRadio3' value='2' label='Other' inline onChange={(e)=>setGender(e.target.value)}/>
                  </div>

                  <MDBRow>
                    <MDBCol md='6'>
                      <div className='mb-4'>

                        <select className='form-select form-select-lg' id='Branch' style={{ fontSize: '16px' }}>
                          <option value='Select Branch'>--Select Branch--</option>
                          <option value='Applied Geology'>Applied Geology</option>
                          <option value='Architecture'>Architecture</option>
                          <option value='Bio Medical Engineering'>Bio Medical Engineering</option>
                          <option value='Bio Technology'>Bio Technology</option>
                          <option value='Chemical Engineering'>Chemical Engineering</option>
                          <option value='Civil Engineering'>Civil Engineering</option>
                          <option value='Computer Science & Engineering'>Computer Science & Engineering</option>
                          <option value='Department of Chemistry'>Department of Chemistry</option>
                          <option value='Department of Computer Application'>Department of Computer Application</option>
                          <option value='Department of Mathematics'>Department of Mathematics</option>
                          <option value='Department of Physics'>Department of Physics</option>
                          <option value='Electrical Engineering'>Electrical Engineering</option>
                          <option value='Electronics and Communication Engineering'>Electronics and Communication Engineering</option>
                          <option value='Information Technology'>Information Technology</option>
                          <option value='Mechanical Engineering'>Mechanical Engineering</option>
                          <option value='Mining Engineering'>Mining Engineering</option>
                          <option value='Metallurgical and Materials Engineering'>Metallurgical and Materials Engineering</option>
                          <option value='Workshop'>Workshop</option>
                        </select>
                      </div>

                    </MDBCol>

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Phone No' size='lg' id='form5' type='text' onChange={(e)=>setPhone(e.target.value)} style={{}}/>
                  <MDBInput wrapperClass='mb-5' label='Email ID' size='lg' id='form6' type='text' onChange={(e)=>setEmail(e.target.value)} style={{}}/>

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
