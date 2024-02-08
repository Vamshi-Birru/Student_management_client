import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem,sidebarClasses} from 'react-pro-sidebar';
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PeopleIcon from '@mui/icons-material/People';
import "../styles/sidebar.css";

export default function Sidebarcomponent() {
    const [collapsed,setCollapsed]=useState(false);

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
                <MenuItem icon={<PeopleIcon />} className="menu1">Records</MenuItem>
                <MenuItem icon={<LogoutRoundedIcon />} className='menu1'> Logout </MenuItem>
              </Menu>
              
            </Sidebar>
            </>
  )
}
