import React from "react";
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

export default function Notification() {
  return (
    <>
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
                              <th scope="col" className="text-center">sem-1</th>
                              <th scope="col" className="text-center">sem-2</th>
                              <th scope="col" className="text-center">sem-3</th>
                              <th scope="col" className="text-center">sem-4</th>
                              <th scope="col" className="text-center">sem-5</th>
                              <th scope="col" className="text-center">sem-6</th>
                              <th scope="col" className="text-center">sem-7</th>
                              <th scope="col" className="text-center">sem-8</th>
                              <th scope="col" className="text-center">Actions</th>
                            </tr>
                          </MDBTableHead>
                          <MDBTableBody>
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
