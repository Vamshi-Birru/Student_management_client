import React,{useState,useEffect} from 'react';
import "../../styles/Registration_forms/Oparty.css"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  
}
from 'mdb-react-ui-kit';
import Footer from '../../components/footer';
import Layout from '../../components/layout';
import { ethers } from 'ethers';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OParty() {
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

  const [oname, setOname] = useState();
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
      const result = await contract.add_otherP(oname,address, email);
      console.log("Transaction Result:", result); // Check transaction result
      navigate("/OParty");
    } catch (err) {
      console.log("Submit error:", err);
    }
  }
  return (
    <>
    <Layout/>
    <MDBContainer fluid className='Oparty'>

      <MDBRow className='d-flex justify-content-center align-items-center '>

        <MDBCol lg='5' >

          <MDBCard className='my-5 rounded-3 ' style={{maxWidth: '600px'}}>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp' className='w-100 rounded-top'  alt="Sample photo"/>

            <MDBCardBody className='px-5'>

              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
              <MDBInput wrapperClass='mb-4' label='Name of Organisation' id='form1' type='text' onChange={(e)=>setOname(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='text' onChange={(e)=>setEmail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='Address' id='form1' type='text' onChange={(e)=>setAddress(e.target.value)}/>
             
             
              <MDBBtn color='success' className='mb-4' size='lg' onClick={()=>handleSubmit()}>Submit</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    <Footer/>
    </>
  );
}

export default OParty;