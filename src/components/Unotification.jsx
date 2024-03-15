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
  const [other,setOther]=useState();

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
      fetchOtherPNotifications();
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
      console.log("Error while fetching the students notifications", err);
    }
    
  }
const fetchOtherPNotifications=async()=>{
  try{
const result=await contract.getOtherPNotifications();
console.log("OtherP results: ",result);
setOther(result);
  }
  catch(err){
    console.log("Error while fetching Other parties notifications", err);
  }
}
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
  const AcceptIt=async(other)=>{
try{
  
 console.log(other[0],other[1]);
  const response=await contract.acceptRequest(other[0],other[1]);
  console.log(response);
  contract.on("acceptedRequest", ( universityAddress,enrollment, enrollments) => {
    console.log("Request accepted - University address:", universityAddress);
    console.log("Enrollment:", enrollment);
    console.log("Enrollments:", enrollments);
    toast.success("Successfully accepted");
});
  
  fetchOtherPNotifications();
}
catch(err){
  console.log("Error while accepting it", err);
        toast.error("Failed to accept the record");
}
  }
  const RejectItS=async(student)=>{
    
    try{
        await contract.rejectSRecord(other[0]);
        toast.success("Successfully rejected the record");
    }
    catch(err){
      console.log("Error while rejecting it ", err);
      toast.error("Failed to reject the record");
    }
  }
  const RejectItO=async(other)=>{
    try{
      await contract.rejectOrequest(other[0]);
      toast.success("Successfully rejected the request");
    }
    catch(err){
      console.log("Error while rejecting it ", err);
      toast.error("Failed to reject the request");
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
                      <h4>Student Notifications</h4>
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
                                  <MDBBtn color="danger" onClick={()=>RejectItS(studentInfo)}>Reject</MDBBtn>
                                </td>
                              </tr>
                            ))}
                          </MDBTableBody>
                        </MDBTable>
                        <h4>Other party Notifications</h4>
                        <MDBTable className="mb-0">
                          <MDBTableHead>
                            <tr>
                              <th scope="col" className="text-center">Name</th>
                              <th scope="col" className="text-center">Enrollment number</th>
                              
                              <th scope="col" className="text-center">Actions</th>
                            </tr>
                          </MDBTableHead>
                          <MDBTableBody>
                            {other && other.map((otherPInfo, index) => (
                              <tr key={index} className="fw-normal">
                                <th className="text-center">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                                  alt="avatar"
                                  className="shadow-1-strong rounded-circle"
                                  style={{ width: "45px", height: "auto" }}
                                />
                                  {/* Assuming studentInfo[0] contains the student name */}
                                  <span>{otherPInfo[0]}</span>
                                </th>
                                {/* Assuming studentInfo[1] contains the semester information */}
                                {otherPInfo.slice(1).map((semester, index) => (
                                  <td key={index} className="align-middle text-center">{semester}</td>
                                ))}
                                <td className="align-middle text-center">
                                  <MDBBtn color="success" className="me-2" onClick={()=>AcceptIt(otherPInfo)}>Approve</MDBBtn>
                                  <MDBBtn color="danger" onClick={()=>RejectItO(otherPInfo)}>Reject</MDBBtn>
                                </td>
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
