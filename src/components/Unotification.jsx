import React, { useState, useEffect } from "react";
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
  MDBBtn
} from "mdb-react-ui-kit";
import Footer from "./footer";
import Sidebarcomponent from "./Usidebar";
import axios from 'axios';
import { ethers } from 'ethers';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Notification() {
  const [contractaddress, setContractaddress] = useState();
  const [abi, setAbi] = useState();
  const [contract, setContract] = useState();
  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();
  const [student, setStudent] = useState();

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
  useEffect(() => {
    if (contract && signer) {
      console.log("Hello");
      fetchStudentNotifications();
    }
  }, [contract]);
  const fetchStudentNotifications = async () => {
    const publicKey = await signer.getAddress();
    try{
      console.log(publicKey);
      const result = await contract.getStudentNotifications();
   console.log(result);
      setStudent(result);
    }
    catch(err){
      console.log("Error while fetching the notifications", err);
    }
    
  }
//   function approveRecord(
//     address addr,
// uint _enroll,
// string memory _hash
// ) public {

// // Store the hash using the retrieved university address and enrollment number
// universityEnrollToHash[addr][_enroll] = _hash;
// }
  const ApproveIt=async(student)=>{
      try{
       
         const response=await contract.approveRecord(student[0],student[1]);
         console.log(response);
         toast.success("Succesfully approved the record");
         fetchStudentNotifications();
      }
      catch(err){
        console.log("Error while Approving it", err);
        toast.error("Failed to approved the record");
      }

  }
  const RejectIt=async()=>{
    const publicKey=await signer.getAddress();
    try{

    }
    catch(err){
      console.log("Error while rejecting it ", err);
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
                <MDBCol md="12" xl="12">
                  <MDBCard>
                    <MDBCardHeader className="p-3">
                      <h5 className="mb-0">
                        <MDBIcon fas icon="tasks" className="me-2" />
                        Tasks
                      </h5>
                    </MDBCardHeader>
                    <div className="scrollbar-custom">
                      {/* Custom scrollbar container */}
                      <MDBCardBody className="overflow-auto" style={{ maxHeight: "400px" }}>
                        <MDBTable className="mb-0">
                          <MDBTableHead>
                            <tr>
                              <th scope="col" className="text-center">Name</th>
                              <th scope="col" className="text-center">IpfsHash</th>
                              
                              <th scope="col" className="text-center">Actions</th>
                            </tr>
                          </MDBTableHead>
                          <MDBTableBody>
                            {student && student.map((studentInfo, index) => (
                              <tr key={index} className="fw-normal">
                                <th className="text-center">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                                  alt="avatar"
                                  className="shadow-1-strong rounded-circle"
                                  style={{ width: "45px", height: "auto" }}
                                />
                                  {/* Assuming studentInfo[0] contains the student name */}
                                  <span>{studentInfo[0]}</span>
                                </th>
                                {/* Assuming studentInfo[1] contains the semester information */}
                                {studentInfo.slice(1).map((semester, index) => (
                                  <td key={index} className="align-middle text-center">{semester}</td>
                                ))}
                                <td className="align-middle text-center">
                                  <MDBBtn color="success" className="me-2" onClick={()=>ApproveIt(studentInfo)}>Approve</MDBBtn>
                                  <MDBBtn color="danger" onClick={()=>RejectIt()}>Reject</MDBBtn>
                                </td>
                              </tr>
                            ))}
                          </MDBTableBody>
                          {/* <MDBTableBody>
                            <tr className="fw-normal">
                              <th className="text-center">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                                  alt="avatar"
                                  className="shadow-1-strong rounded-circle"
                                  style={{ width: "45px", height: "auto" }}
                                />
                                <span className="ms-2">Alice Mayer</span>
                              </th>
                              <td className="align-middle text-center">1</td>
                              <td className="align-middle text-center">2</td>
                              <td className="align-middle text-center">3</td>
                              <td className="align-middle text-center">4</td>
                              <td className="align-middle text-center">5</td>
                              <td className="align-middle text-center">6</td>
                              <td className="align-middle text-center">7</td>
                              <td className="align-middle text-center">8</td>
                              <td className="align-middle text-center">
                                <MDBBtn color="success" className="me-2">Approve</MDBBtn>
                                <MDBBtn color="danger">Reject</MDBBtn>
                              </td>
                            </tr>
                          </MDBTableBody> */}
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
