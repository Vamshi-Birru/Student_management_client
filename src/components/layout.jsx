
import React, { useState } from 'react';
import {
    MDBNavbar,
      MDBContainer,
      MDBNavbarBrand,
      MDBNavbarItem,
      MDBNavbarLink,
      MDBDropdown,
      MDBDropdownItem,
      MDBDropdownMenu,
      MDBDropdownToggle,
      MDBNavbarNav,
      MDBNavbarToggler,
      MDBIcon,
      MDBCollapse
} from 'mdb-react-ui-kit';

export default function App() {
  const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            
            onClick={() => setOpenNavNoTogglerSecond(!openNavNoTogglerSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNavNoTogglerSecond}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                  Disabled
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' style={{ color: '#fff', cursor: 'pointer',fontSize: '1.5rem' }}>
                <MDBIcon icon='bars' fas />
                </MDBDropdownToggle>
                <MDBDropdownMenu >
                  <MDBDropdownItem  link>Login</MDBDropdownItem>
                  <MDBDropdownItem link>Register</MDBDropdownItem>
 
                </MDBDropdownMenu>
              </MDBDropdown>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}