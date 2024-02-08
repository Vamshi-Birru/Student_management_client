import React, { useEffect } from "react";
import {
  MDBBadge,
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
  MDBTooltip,
} from "mdb-react-ui-kit";
import Footer from "./footer";
import Sidebarcomponent from "./sidebar";

export default function Records() {
   
  return (
    <>
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
                  Task List
                </h5>
              </MDBCardHeader>
              <div className="scrollbar-custom"> {/* Custom scrollbar container */}
                <MDBCardBody className="overflow-auto" style={{ maxHeight: "400px" }}>
               
                  <MDBTable className="mb-0">
                    <MDBTableHead>
                      <tr>
                        <th scope="col">Team Member</th>
                        <th scope="col">Task</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr className="fw-normal">
                        <th>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                            alt="avatar"
                            className="shadow-1-strong rounded-circle"
                            style={{ width: "45px", height: "auto" }}
                          />
                          <span className="ms-2">Alice Mayer</span>
                        </th>
                        <td className="align-middle">
                          <span>Call Sam For payments</span>
                        </td>
                        <td className="align-middle">
                          <h6 className="mb-0">
                            <MDBBadge className="mx-2" color="danger">
                              High priority
                            </MDBBadge>
                          </h6>
                        </td>
                        <td className="align-middle">
                          <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Done"
                          >
                            <MDBIcon
                              fas
                              icon="check"
                              color="success"
                              size="lg"
                              className="me-3"
                            />
                          </MDBTooltip>
                          <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Remove"
                          >
                            <MDBIcon
                              fas
                              icon="trash-alt"
                              color="danger"
                              size="lg"
                              className="me-3"
                            />
                          </MDBTooltip>
                        </td>
                      </tr>
                      <tr className="fw-normal">
                        <th>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                            alt="avatar"
                            className="shadow-1-strong rounded-circle"
                            style={{ width: "45px", height: "auto" }}
                          />
                          <span className="ms-2">Kate Moss</span>
                        </th>
                        <td className="align-middle">
                          <span>Make payment to Bluedart</span>
                        </td>
                        <td className="align-middle">
                          <h6 className="mb-0">
                            <MDBBadge className="mx-2" color="success">
                              Low priority
                            </MDBBadge>
                          </h6>
                        </td>
                        <td className="align-middle">
                          <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Done"
                          >
                            <MDBIcon
                              fas
                              icon="check"
                              color="success"
                              size="lg"
                              className="me-3"
                            />
                          </MDBTooltip>
                          <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Remove"
                          >
                            <MDBIcon
                              fas
                              icon="trash-alt"
                              color="danger"
                              size="lg"
                              className="me-3"
                            />
                          </MDBTooltip>
                        </td>
                      </tr>
                      <tr className="fw-normal">
                        <th>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            alt="avatar"
                            className="shadow-1-strong rounded-circle"
                            style={{ width: "45px", height: "auto" }}
                          />
                          <span className="ms-2">Danny McChain</span>
                        </th>
                        <td className="align-middle">
                          <span>Office rent</span>
                        </td>
                        <td className="align-middle">
                          <h6 className="mb-0">
                            <MDBBadge className="mx-2" color="warning">
                              Middle priority
                            </MDBBadge>
                          </h6>
                        </td>
                        <td className="align-middle">
                          <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Done"
                          >
                            <MDBIcon
                              fas
                              icon="check"
                              color="success"
                              size="lg"
                              className="me-3"
                            />
                          </MDBTooltip>
                          <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Remove"
                          >
                            <MDBIcon
                              fas
                              icon="trash-alt"
                              color="danger"
                              size="lg"
                              className="me-3"
                            />
                          </MDBTooltip>
                        </td>
                      </tr>
                      <tr className="fw-normal">
                        <th>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                            alt="avatar"
                            className="shadow-1-strong rounded-circle"
                            style={{ width: "45px", height: "auto" }}
                          />
                          <span className="ms-2">Alexa Chung</span>
                        </th>
                        <td className="align-middle">
                          <span>Office grocery shopping</span>
                        </td>
                        <td className="align-middle">
                          <h6 className="mb-0">
                            <MDBBadge className="mx-2" color="danger">
                              High priority
                            </MDBBadge>
                          </h6>
                        </td>
                        <td className="align-middle">
                          <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Done"
                          >
                            <MDBIcon
                              fas
                              icon="check"
                              color="success"
                              size="lg"
                              className="me-3"
                            />
                          </MDBTooltip>
                          <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Remove"
                          >
                            <MDBIcon
                              fas
                              icon="trash-alt"
                              color="danger"
                              size="lg"
                              className="me-3"
                            />
                          </MDBTooltip>
                        </td>
                      </tr>
                      <tr className="fw-normal">
                        <th className="border-0">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                            alt="avatar"
                            className="shadow-1-strong rounded-circle"
                            style={{ width: "45px", height: "auto" }}
                          />
                          <span className="ms-2">Ben Smith</span>
                        </th>
                        <td className="border-0 align-middle">
                          <span>Ask for Lunch to Clients</span>
                        </td>
                        <td className="border-0 align-middle">
                          <h6 className="mb-0">
                            <MDBBadge className="mx-2" color="success">
                              Low priority
                            </MDBBadge>
                          </h6>
                        </td>
                        <td className="border-0 align-middle">
                          <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Done"
                          >
                            <MDBIcon
                              fas
                              icon="check"
                              color="success"
                              size="lg"
                              className="me-3"
                            />
                          </MDBTooltip>
                          <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Remove"
                          >
                            <MDBIcon
                              fas
                              icon="trash-alt"
                              color="danger"
                              size="lg"
                              className="me-3"
                            />
                          </MDBTooltip>
                        </td>
                      </tr>
                      <tr className="fw-normal">
                        <th className="border-0">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                            alt="avatar"
                            className="shadow-1-strong rounded-circle"
                            style={{ width: "45px", height: "auto" }}
                          />
                          <span className="ms-2">Annie Hall</span>
                        </th>
                        <td className="border-0 align-middle">
                          <span>Create weekly tasks plan</span>
                        </td>
                        <td className="border-0 align-middle">
                          <h6 className="mb-0">
                            <MDBBadge className="mx-2" color="warning">
                              Medium priority
                            </MDBBadge>
                          </h6>
                        </td>
                        <td className="border-0 align-middle">
                          <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Done"
                          >
                            <MDBIcon
                              fas
                              icon="check"
                              color="success"
                              size="lg"
                              className="me-3"
                            />
                          </MDBTooltip>
                          <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Remove"
                          >
                            <MDBIcon
                              fas
                              icon="trash-alt"
                              color="danger"
                              size="lg"
                              className="me-3"
                            />
                          </MDBTooltip>
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
    <Footer/>
    </>
  );
}