import React, { useState, useEffect } from 'react';
import Footer from './footer';
import Sidebarcomponent from "./Ssidebar";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CheckIcon from '@mui/icons-material/Check';
import "../styles/Srecord.css";
import { create } from 'ipfs-http-client';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ethers } from 'ethers';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SrecordForm() {
  const initialValues = {
    semester1: 0,
    semester2: 0,
    semester3: 0,
    semester4: 0,
    semester5: 0,
    semester6: 0,
    semester7: 0,
    semester8: 0
  };

  const [values, setValues] = useState(initialValues);



  const handleChange = (key, event) => {
    let { value } = event.target;

    value = parseFloat(value);

    if (value < 0) {
      value = 0;
    } else if (value > 10) {
      value = 10;
    }
    setValues(prevState => ({
      ...prevState,
      [key]: value
    }));
  };
  const handleReset = () => {
    setValues(initialValues);
  };
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
  const ipfs = create({
    host: 'localhost',
    port: 5001,
    protocol: 'http',
  });
  const handleSubmit = async () => {
    try {

      const result = await ipfs.add(JSON.stringify(values));
      const ipfsHash = result.path;

      submitToUniversity(ipfsHash);

    } catch (error) {
      console.error('Error while submitting to IPFS:', error);
      toast.error("An error occurred while uploading the document");
    }
  }
  const submitToUniversity = async (ipfsHash) => {
    try {
      const response = await contract.sendRecordsToUniversity( ipfsHash);
     
      contract.on("StudentNotificationAdded", (universityName, universityAddress, notifications) => {
        console.log("Student notification added - University Name:", universityName);
        console.log("University Address:", universityAddress);
        console.log("Notifications:", notifications);
        toast.success("Successfully submitted to university");
    });
      
      
    }
    catch (err) {
      console.log(err);
      toast.error("Error while submitting to university");
    }
  }
  
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="wrapper">
        <Sidebarcomponent />
        <div className='content-wrapper' style={{ marginTop: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
          <h1 style={{ marginTop: '10vh' }}>Student Record Upload</h1>
          <MDBTable responsive>
            <MDBTableHead dark>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Semester-1</th>
                <th scope='col'>Semester-2</th>
                <th scope='col'>Semester-3</th>
                <th scope='col'>Semester-4</th>
                <th scope='col'>Semester-5</th>
                <th scope='col'>Semester-6</th>
                <th scope='col'>Semester-7</th>
                <th scope='col'>Semester-8</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <th scope='row'>1</th>
                <td>

                  <input className='marks-input' type="number" value={values.semester1} onChange={(e) => handleChange('semester1', e)} step={'0.1'} />

                </td>
                <td>

                  <input className='marks-input' type="number" value={values.semester2} onChange={(e) => handleChange('semester2', e)} step={'0.1'} />

                </td>
                <td>

                  <input className='marks-input' type="number" value={values.semester3} onChange={(e) => handleChange('semester3', e)} step={'0.1'} />

                </td>
                <td>

                  <input className='marks-input' type="number" value={values.semester4} onChange={(e) => handleChange('semester4', e)} step={'0.1'} />

                </td>
                <td>

                  <input className='marks-input' type="number" value={values.semester5} onChange={(e) => handleChange('semester5', e)} step={'0.1'} />

                </td>
                <td>

                  <input className='marks-input' type="number" value={values.semester6} onChange={(e) => handleChange('semester6', e)} step={'0.1'} />

                </td>
                <td>

                  <input className='marks-input' type="number" value={values.semester7} onChange={(e) => handleChange('semester7', e)} step={'0.1'} />

                </td>
                <td>

                  <input className='marks-input' type="number" value={values.semester8} onChange={(e) => handleChange('semester8', e)} step={'0.1'} />

                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
          <div className='text-center mt-3'>
            <MDBBtn color="success" className="me-2" onClick={() => handleSubmit()} > <CheckIcon /> Submit</MDBBtn>
            <MDBBtn color="danger" className='me-2' onClick={() => handleReset()} > <RestartAltIcon /> Reset</MDBBtn>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
