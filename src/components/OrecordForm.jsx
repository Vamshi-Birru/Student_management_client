import React, { useState, useEffect } from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import Sidebarcomponent from './Osidebar';
import Footer from './footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ethers } from 'ethers';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RecordForm = () => {
  const [university, setUniversity] = useState();
  const [contractaddress, setContractaddress] = useState();
  const [abi, setAbi] = useState();
  const [contract, setContract] = useState();

  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();
  const [universityList, setUniversityList] = useState([]);
  const [name, setName] = useState();
  const [enroll, setEnroll] = useState();

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
  useEffect(() => {
    if (contract && signer) {
      fetchUniversityList();
    }
  }, [contract]);
  const fetchUniversityList = async () => {
    try {
      const result = await contract.get_university_list();
      setUniversityList(result);
      //console.log(result);
    }
    catch (err) {
      console.log("Error: ", err);
      toast.error("Error while fetching the university list");
    }


  }
  const handleSubmit = async () => {
    try {
        await contract.sendOPartyrecordsToUniversity(university,enroll);
        toast.success("Successfully sent the request");
    }
    catch (err) {
      console.log("Error while submitting, ", err);
    }
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="wrapper"  >
        <Sidebarcomponent />
        <div className='content-wrapper' style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: "68vh" }}>
          <form style={{ width: '30rem' }}>

            <div style={{ background: 'black', borderRadius: '5px' }} className="text-center text-white">
              <p className="h5 mt-2 py-4 font-weight-bold" style={{ borderRadius: '10%' }}>Contact Us</p>
            </div>
            <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' onChange={(e) => setName(e.target.value)} />
            <MDBInput type='Number' id='form4Example2' wrapperClass='mb-4' label='Enrollment ID' onChange={(e) => setEnroll(e.target.value)} />
            <MDBRow>
              <MDBCol md="6">
                <div className="mb-4">
                  <select
                    className="form-select form-select-lg"
                    id="Branch"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    style={{ fontSize: '16px' }}
                  >
                    <option value="">-- Select University --</option>
                    {universityList.map((university, index) => (
                      <option key={index} value={university}>
                        {university}
                      </option>
                    ))}
                  </select>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />

            <MDBCheckbox
              wrapperClass='d-flex justify-content-center mb-4'
              id='form4Example4'
              label='Send me a copy of this request'
              defaultChecked
            />

            <MDBBtn type='submit' className='mb-4' block onClick={handleSubmit}>
              Send Request
            </MDBBtn>

          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default RecordForm;