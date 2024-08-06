import React,{useState,useEffect} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import "../../styles/Registration_forms/University.css";
import Layout from '../../components/layout';
import Footer from '../../components/footer';
import { ethers } from 'ethers';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function University() {
  const navigate=useNavigate();
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

  const [uname, setUname] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [contractaddress, setContractaddress] = useState();
  const [abi, setAbi] = useState();
  const [contract, setContract] = useState();
  
  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();

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



  const handleSubmit = async () => {
    try {
      // console.log("Contract:", contract); // Check contract object
    
       //console.log("Form Data:", uname, address, email); // Check form data
      const result = await contract.add_university(uname,address, email);
      console.log("Transaction Result:", result); // Check transaction result
      navigate("/university");
    } catch (err) {
      console.log("Submit error:", err);
    }
  }
  return (
    <>
    <Layout/>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='University Name' size='lg' id='form1' type='text' onChange={(e)=>setUname(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='form1' type='text'onChange={(e)=>setAddress(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' onChange={(e)=>setEmail(e.target.value)}/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'onClick={()=>handleSubmit()} >Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    <Footer/>
    </>
  );
}

export default University;