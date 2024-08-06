import React, { useState } from 'react';
import Footer from '../../components/footer';
import {
  MDBIcon
} from 'mdb-react-ui-kit';

import "../../styles/Home/university.css";
import Sidebarcomponent from '../../components/Usidebar';
import { useNavigate } from 'react-router-dom';



export default function University() {
  
  const navigate=useNavigate();
  const [notificationCount, setNotificationCount] = useState(0);
  

const handleNotificationClick = () => {
   navigate("/university/notifications");
};

  

  return (
    
    <div className="app-container">
      

      <div className="content-wrapper">
       <Sidebarcomponent/>

        <div className='bg-image'>
          <img
            src='https://images.pexels.com/photos/586570/pexels-photo-586570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='img-fluid'
            alt='Sample'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', height: '100%' }}>
            
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className="text-container" style={{marginTop:"-20%"}}>
                <h1 className='text-white mb-4' style={{ textAlign: 'center' }}>
                  National Institute of Technology
                </h1>
                <p className='text-white mb-0' style={{ textAlign: 'center' }}>
                  Welcome to the NIT, where endless possibilities await your academic journey.<br />
                  Nestled in the heart of Raipur, our esteemed institution stands as a beacon of knowledge, innovation, and community.<br />
                  As you embark on your educational voyage with us, prepare to be inspired by our dedicated faculty, enriched by our diverse student body, and empowered by our commitment to excellence.<br />
                  Whether you aspire to delve into groundbreaking research, foster meaningful connections, or shape the future with your unique vision, NIT provides the fertile ground for your aspirations to flourish.<br />
                  Join us as we embark on a transformative voyage of learning, discovery, and growth – together, we'll reach new heights and redefine what's possible.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="notification-container">
          <button className="notification-button" onClick={handleNotificationClick}>
            <span className="notification-icon">
              <MDBIcon icon="bell text-light"  />
              {notificationCount > 0 && <span className="notification-badge">{notificationCount}</span>}
            </span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
    
  );
}
