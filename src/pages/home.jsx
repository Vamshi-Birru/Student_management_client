import React from 'react'
import Layout from '../components/layout';
import Footer from '../components/footer';
import "../styles/home.css"
export default function home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Layout />

      <div className="container">
        <div className="context">
          <h1>Welcome to Our Application</h1>
          <p>Our application revolutionizes student management and academic record-keeping with blockchain technology. Securely upload and manage your marks with ease.</p>
          <div className="buttons">
            <button className="btn btn-primary mr-2">Register</button>
            <button className="btn btn-success">Login</button>
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
  )
}
