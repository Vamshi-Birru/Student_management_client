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
  import Footer from "../../components/footer";
  import Sidebarcomponent from "../../components/Ssidebar";

const Student = () => {
  

  return (
    <>
     <div className="app-container">


<div className="content-wrapper">
  <Sidebarcomponent/>

  <div className='bg-image'>
    <img
      src='https://images.unsplash.com/photo-1455719103652-8c015f564e2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlyb24lMjBtYW58ZW58MHwwfDB8fHww'
      className='img-fluid'
      alt='Sample'
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', height: '100%' }}>

      <div className='d-flex justify-content-center align-items-center h-100'>
        <div className="text-container" style={{ marginTop: "-15%" }}>
          <h1 className='text-white mb-4' style={{ textAlign: 'center' }}>
          Welcome to your Student Home Page,
          </h1>
          <p className='text-white mb-0' style={{ textAlign: 'center' }}>
           where academic excellence meets blockchain technology. 
          Upload your marks securely onto the Ethereum blockchain network, ensuring transparent and 
          immutable record-keeping for your academic achievements. Take control of your education with 
          confidence and innovation. Welcome to the future of student empowerment.
          </p>

        </div>
      </div>
    </div>
  </div>
</div>

<Footer />
</div>
    </>
  );
}

export default Student;
