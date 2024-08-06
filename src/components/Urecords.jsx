import React, { useEffect,useState } from "react";
import {
  
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import Footer from "./footer";
import Sidebarcomponent from "./Usidebar";
import axios from 'axios';
import { ethers } from 'ethers';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function Records() {
  const [contractaddress, setContractaddress] = useState();
  const [abi, setAbi] = useState();
  const [contract, setContract] = useState(); 
  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();
  const [recordsArray, setRecordsArray] = useState([]);

  
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
        toast.error("Error, while fetching contract info")
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

  useEffect(()=>{
       fetchRecords();
  },[contract]);
  const fetchRecords=async()=>{
    try{
       const response=await contract.getRecordsofAllEnroll();
       console.log(response);
       await fetchRecordsofAllSems(response);
       toast.success("Successfully fetched the records");
    }
    catch(err){
        console.log("Error while fetching the records: ",err);
        // toast.error("Failed to fetch the records");
    }
  }
  const fetchRecordsofAllSems = async (response) => {
    try {
        const tempArray = [];
        for (let i = 0; i < response.length; i++) {
            const enrollNo = response[i][0];
            const ipfsHash = response[i][1];
            const result = await axios.get(`http://localhost:8080/ipfs/${ipfsHash}`);
            const record = [enrollNo];
            // Assuming each semester's data is structured as described
            for (const semester in result.data) {
                record.push(result.data[semester]);
            }
            tempArray.push(record);
            console.log(tempArray);
        }
        setRecordsArray(prevArray => [...prevArray, ...tempArray]);
    } catch (err) {
        console.log("Error while fetching records from IPFS ", err);
    }
}
  return (
    <>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="d-flex">
        <Sidebarcomponent />
        <div className="flex-grow-1">
          <section className="gradient-custom-2 vh-100 d-flex justify-content-center align-items-center">

            <MDBContainer className="py-5 h-100">

              <MDBRow className="d-flex justify-content-center align-items-center">
                <MDBCol md="12" xl="10">
                  <MDBCard>
                    <MDBCardHeader className="p-3">
                      <h5 className="mb-0">
                        <MDBIcon fas icon="tasks" className="me-2" />
                        Students Records
                      </h5>
                    </MDBCardHeader>
                    <div className="scrollbar-custom"> {/* Custom scrollbar container */}
                      <MDBCardBody className="overflow-auto" style={{ maxHeight: "400px" }}>

                        <MDBTable className="mb-0">
                          <MDBTableHead>
                            <tr>
                              <th scope="col" className="text-center">Enrollment Number</th>
                              <th scope="col" className="text-center">sem-1</th>
                              <th scope="col" className="text-center">sem-2</th>
                              <th scope="col" className="text-center">sem-3</th>
                              <th scope="col" className="text-center">sem-4</th>
                              <th scope="col" className="text-center">sem-5</th>
                              <th scope="col" className="text-center">sem-6</th>
                              <th scope="col" className="text-center">sem-7</th>
                              <th scope="col" className="text-center">sem-8</th>
                              
                            </tr>
                          </MDBTableHead>
                          <MDBTableBody>
                          {recordsArray.map((record, index) => (
                            <tr key={index} className="fw-normal">
                              <th className="text-center">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                                  alt="avatar"
                                  className="shadow-1-strong rounded-circle"
                                  style={{ width: "45px", height: "auto" }}
                                />
                                <span className="ms-2">{record[0]}</span> {/* Assuming student name is fixed for now */}
                              </th>
                              {record.slice(1).map((semesterResult, semesterIndex) => (
                                <td key={semesterIndex} className="align-middle text-center">{semesterResult}</td>
                              ))}
                            </tr>
                          ))}
                        </MDBTableBody>
                        </MDBTable>
                      </MDBCardBody>
                    </div>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>

          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}