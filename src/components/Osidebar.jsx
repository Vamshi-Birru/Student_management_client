import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem,sidebarClasses} from 'react-pro-sidebar';
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GetAppIcon from '@mui/icons-material/GetApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import "../styles/sidebar.css";
import { useNavigate } from 'react-router-dom';

export default function Sidebarcomponent() {
    const [collapsed,setCollapsed]=useState(true);
    const navigate=useNavigate();

  return (
    <>
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
              <MenuItem className="menu1" icon={<MenuRoundedIcon onClick={() => setCollapsed(!collapsed)}/>}></MenuItem>
              <MenuItem className='menu1' icon={<HomeIcon/>} onClick={()=>navigate("/")}>Home</MenuItem>
                <MenuItem icon={<AccountCircleIcon/>} onClick={()=>navigate("/Oparty/account")} className='menu1'>Account</MenuItem>
                <MenuItem icon={<GetAppIcon />} onClick={()=>navigate("/Oparty/record")} className="menu1">Student Record</MenuItem>
                <MenuItem icon={<LogoutRoundedIcon />} className='menu1'> Logout </MenuItem>
              </Menu>
              
            </Sidebar>
            </>
  )
}
