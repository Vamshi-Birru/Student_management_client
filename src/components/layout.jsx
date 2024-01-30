import React, { useState,useEffect } from 'react';
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
  MDBCollapse,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBFooter
} from 'mdb-react-ui-kit';
import { useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { ethers } from 'ethers';

export default function Layout() {
  const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);
  const [contractaddress, setContractaddress] = useState();
  const [abi, setAbi] = useState();
  const [contract, setContract] = useState(); 
  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();

  const handleInnerDropdownClick = (e) => {
    e.stopPropagation();
  };
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/contract-info');
        setAbi(response.data.contractABI);
        setContractaddress(response.data.contractAddress);
        console.log(response.data.contractABI);
        // Update state with contract info here if needed
      } catch (error) {
        console.error('Error fetching contract info:', error);
      }
    };

    fetchData(); // Call the async function
  }, []);

  useEffect(() => {
    if (contractaddress && abi) {
      const initContract = async () => {
        setProvider(new ethers.providers.Web3Provider(window.ethereum));
      };

      initContract();

    }
  }, [contractaddress, abi]);
  useEffect(() => {
    if (provider) {
      const signer = provider.getSigner();
      setSigner(signer);
    }
  }, [provider]);
  useEffect(() => {
    if (contractaddress && abi && provider && signer) {
      const newContract = new ethers.Contract(contractaddress, abi, provider);
      const contractWithSigner = newContract.connect(signer);
      setContract(contractWithSigner);
    }
  }, [signer]);

  async function login() {
    const publicKey = await signer.getAddress();
    
    //     console.log(publicKey);
    try {
      var result = await contract.get_student_list();
      var StudentList = result;
      for (var i = 0; i < StudentList.length; i++) {
        if (publicKey.toLowerCase() === StudentList[i].toLowerCase()) {
          // NavigateP({ designation: 0 });
          console.log("Yes, he is a student");
          return;
        }
      }
    } catch (error) {
      console.log("Error: ", error);
    }

    try {
      var result = await contract.get_university_list();
      var UniversityList = result;
      for (var i = 0; i < UniversityList.length; i++) {
        if (publicKey.toLowerCase() === UniversityList[i].toLowerCase()) {
          console.log("It is university");
          // Navigate({ designation: 1 });
          return;
        }
      }

    }
    catch (error) {
      console.log("Error: ", error);
    }
    try{
      var result = await contract.get_otherP_list();
      var OtherPList = result;
      for (var i = 0; i < OtherPList.length; i++) {
        if (publicKey.toLowerCase() === OtherPList[i].toLowerCase()) {
          console.log("yes, it is Other Party");
          // Navigate({ designation: 1 });
          return;
        }
      }
    }
    catch(err){
      console.log("Error: ", err);
    }
    console.log("Invalid user!!!");

  }
  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img src="https://www.pngmart.com/files/3/Iron-Man-Transparent-PNG.png" style={{ width: '50px' }} alt="" />
            Student Management
          </MDBNavbarBrand>
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

            </MDBNavbarNav>
            <MDBDropdown>
              <MDBDropdownToggle tag='a' className='nav-link' style={{ color: '#fff', cursor: 'pointer', fontSize: '1.5rem' }}>
                <MDBIcon icon='bars' fas />
              </MDBDropdownToggle>
              <MDBDropdownMenu >
                <MDBDropdownItem onClick={login} link>Login</MDBDropdownItem>
                <MDBDropdownItem link >
                  <MDBDropdown onClick={handleInnerDropdownClick}>
                    <MDBDropdownToggle tag="a" className='nav-link' >
                      Register
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem link onClick={() => navigate("/reg_stu")}>Student</MDBDropdownItem>
                      <MDBDropdownItem link onClick={() => navigate("/reg_uni")}>University</MDBDropdownItem>
                      <MDBDropdownItem link onClick={() => navigate("/reg_Opa")}>Other Party</MDBDropdownItem>

                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBDropdownItem>

              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <main>
        <Outlet />
      </main>
      <MDBFooter className='text-center ' color='white' bgColor='dark'>
        <MDBContainer className='p-4'>
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='google' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>

          <section className=''>
            <form action=''>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol size="auto">
                  <p className='pt-2'>
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>

                <MDBCol md='5' start>
                  <MDBInput contrast type='email' label='Email address' className='mb-4' />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn outline color='light' type='submit' className='mb-4'>
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            Vamshi_Mike_Abhiram
          </a>
        </div>
      </MDBFooter>
    </>
  );
}