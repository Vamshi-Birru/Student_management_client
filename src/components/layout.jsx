import React, { useState,useEffect } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ethers } from 'ethers';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        //console.log(response.data.contractABI);
        // Update state with contract info here if needed
      } catch (error) {
        console.error('Error fetching contract info:', error);
        toast.error("Error fetching contract info");
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
      var result = await contract.getAddressType(publicKey);
      if(result===1){
        toast.success('Login successful as a student');
        navigate("/student");
      }
      else if(result===2){
        toast.success('Login successful as a university');
        navigate("/university");
      }
      else if(result===3){
        toast.success('Login successful as a OtherP');
        navigate("/otherP");
      }
      else{
        toast.error('Invalid user, please register yourself');
      }
    } catch (error) {
      console.log("Error: ", error);
      toast.error("Error, while searching");
    }

  }
  return (
    <>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
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
      
      
    </>
  );
}