import React,{useState,useEffect} from 'react'
import Layout from '../components/layout';
import Footer from '../components/footer';
import "../styles/home.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ethers } from 'ethers';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [contractaddress, setContractaddress] = useState();
  const [abi, setAbi] = useState();
  const [contract, setContract] = useState(); 
  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();

  
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

  async function login() {
    const publicKey = await signer.getAddress();
    
    //    console.log(publicKey);
    try {
      var result = await contract.getAddressType(publicKey);
      const resultNumber = result.toNumber();
      console.log(resultNumber);
      if(resultNumber===1){
        toast.success('Login successful as a student');
        navigate("/student");
      }
      else if(resultNumber===2){
        toast.success('Login successful as a university');
        navigate("/university");
      }
      else if(resultNumber===3){
        toast.success('Login successful as a OtherP');
        navigate("/OParty");
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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Layout />

      <div className="container">
        <div className="context">
          <h1>Welcome to Our Application</h1>
          <p>Our application revolutionizes student management and academic record-keeping with blockchain technology. Securely upload and manage your marks with ease.</p>
          <div className="buttons">
            {/* <button className="btn btn-primary mr-2">Register</button> */}
            <button className="btn btn-success" onClick={()=>login()}>Login</button>
          </div>
        </div>
        <div className="services">
          <h2>Our Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Safely Upload Records to Blockchain</h3>
                  <p className="card-text">Easily and securely upload your academic records to the blockchain network, ensuring immutability and transparency.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Enhanced Security with Blockchain</h3>
                  <p className="card-text">Your records are more secure on the blockchain, protected from tampering and unauthorized access, providing peace of mind and trust.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Secure Access for Third Parties</h3>
                  <p className="card-text">Controlled and secure access to your records by authorized third parties, ensuring privacy and compliance with regulations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <Footer />

    </div>
    </>
  )
}
