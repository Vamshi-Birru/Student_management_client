import React, { useState } from 'react';

import Sidebarcomponent from '../../components/Osidebar';
import Footer from "../../components/footer"
import "../../styles/Home/OParty.css";




export default function OParty() {

  return (

    <div className="app-container">


      <div className="content-wrapper">
        <Sidebarcomponent/>

        <div className='bg-image'>
          <img
            src='https://plus.unsplash.com/premium_photo-1671303864929-b3fb23aef81f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxoZCUyMHdhbGxwYXBlcnxlbnwwfDB8MHx8fDA%3D'
            className='img-fluid'
            alt='Sample'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', height: '100%' }}>

            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className="text-container" style={{ marginTop: "-15%" }}>
                <h1 className='text-white mb-4' style={{ textAlign: 'center' }}>
                  Welcome
                </h1>
                <p className='text-white mb-0' style={{ textAlign: 'center' }}>
                  Explore the vast repository of student records from the esteemed university.
                  Our platform provides comprehensive access to academic achievements,
                  extracurricular activities, and more.
                  Discover the next generation of talent and potential waiting to be unlocked.
                  Join us in shaping the future together.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  );
}
