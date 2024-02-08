import React, { useState } from 'react';
import Footer from '../footer';
import {
  MDBIcon
} from 'mdb-react-ui-kit';
import { Sidebar, Menu, MenuItem,sidebarClasses,useProSidebar} from 'react-pro-sidebar';

import "../../styles/Home/university.css";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PeopleIcon from '@mui/icons-material/People';



export default function App() {
  
  
  const [notificationCount, setNotificationCount] = useState(0);
  
const { collapseSidebar,  collapsed } =useProSidebar();

const handleNotificationClick = () => {
  setNotificationCount(0);
};

  

  return (
    <div className="app-container">
      

      <div className="content-wrapper">
       <Sidebar className='sidebar' collapsed={collapsed}  rootStyles={{
    [`.${sidebarClasses.container}`]: {
      backgroundColor: '#332D2D',
      color:"#fff"
    },
  }}>
          <Menu menuItemStyles={{ button: { 
        [`&.active`]: {
          backgroundColor: '#555',
        },
        [`&.hover`]:{
          backgroundColor:"#444"
        }
      },
    }}>
          <MenuItem className="menu1" icon={<MenuRoundedIcon onClick={() => { collapseSidebar(); }}/>}></MenuItem>
            <MenuItem icon={<PeopleIcon />} className="menu1">Records</MenuItem>
            <MenuItem icon={<LogoutRoundedIcon />} className='menu1'> Logout </MenuItem>
          </Menu>
          
        </Sidebar>

        <div className='bg-image'>
          <img
            src='https://images.pexels.com/photos/586570/pexels-photo-586570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='img-fluid'
            alt='Sample'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', height: '100%' }}>
            
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className="text-container">
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
