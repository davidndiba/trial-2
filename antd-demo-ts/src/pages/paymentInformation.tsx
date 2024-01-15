import React from "react";
import { Card, Row, Col, Avatar } from 'antd';
import Image from "../assets/image1.png";
import computerImage from "../assets/computerImage.png"; 
import smartphoneImage from "../assets/smartphoneImage.png";
import { Link } from "react-router-dom";
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
  } from 'mdb-react-ui-kit';

const PaymentInformation: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };

  return (
    <Row gutter={16}>
      <Col md={12}>
        <Card>
          <div
            style={{
              backgroundColor: "#001234",
              height: '130vh',
              width: '300%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={Image}
              alt="login form"
              style={{ height: '100%', width: '115%' }}
            />
            <div
              style={{
                backgroundColor: "#001234",
                padding: "40px",
                textAlign: "left",
                width: '100%',
                font: 'inter',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0.5px',
              }}
            >
              <p className="welcome-text" style={{ color: "#fff", margin: "0" }}>
                Welcome to D2S Stream
              </p>

              <div className="avatar-row">
                <Link to="/register" className="avatar-item">
                  <Avatar size={34} style={{ backgroundColor: "#ffffff", color: "black" }}>1</Avatar>
                  <p className="avatar-text">User Details</p>
                </Link>
                <Link to="/organizationDetails" className="avatar-item">
                  <Avatar size={34} style={{ backgroundColor: "#ffffff", color: "black" }}>2</Avatar>
                  <p className="avatar-text">Organization Details</p>
                </Link>
                <Link to="/paymentInformation" className="avatar-item">
                  <Avatar size={34} style={{ backgroundColor: "#ffffff", color: "black" }}>3</Avatar>
                  <p className="avatar-text">Payment Information</p>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <MDBCol md="6">
        <MDBCardBody className="d-flex flex-row align-items-center card-body">
          <h1
            className="fw-normal my-4 pb-3"
            style={{ letterSpacing: '0.5px' }}
          >
            Payment Information
          </h1>
          <div className="mb-3 d-flex justify-content-between">
            <div className="image-container" style={{ backgroundColor: '#0593B8', padding: '20px', borderRadius: '8px', marginRight: '20px', textAlign: 'center' }}>
              <img src={computerImage} alt="Computer" className="img-fluid mb-2" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              <p className="text-white">Flexible Package</p>
            </div>
            <div className="image-container" style={{ backgroundColor: '#F0EEEE', padding: '20px', borderRadius: '8px', textAlign: 'center',marginRight:'20px' }}>
              <img src={smartphoneImage} alt="Smartphone" className="img-fluid mb-2" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              <p className="text-white">Fixed Package</p>
            </div>
          </div>
          <p className="mb-3-text-center-text-primary-font-weight-bold">
            The flexible package is billed based on your usage while the fixed package is billed based on a set limit
          </p>
          <div className="mb-3 d-flex">
            <MDBCol size="8" className="me-2">
              <label htmlFor="field3" className="form-label">
              </label>
              <MDBInput id="field3" type="text" size="lg" placeholder='Credit/Debit Card Number' />
            </MDBCol>
            <MDBCol size="8" className="ms-2">
              <label htmlFor="field2" className="form-label">
              </label>
              <MDBInput id="field2" type="text" size="lg" placeholder='Expiry Date' />
            </MDBCol>
          </div>
          <div className="mb-3 d-flex">
            <MDBCol size="9" className="me-2">
              <label htmlFor="field1" className="form-label">
              </label>
              <MDBInput id="field1" type="text" size="lg" placeholder='Card Holders Name' />
            </MDBCol>
          </div>
          <button className="btn btn-primary mb-3 px-5" style={{ backgroundColor: "#0593B8" }}>
          <Link to="/paymentInformation_1" className="btn-btn-primary-btn-block">
            Save and continue
          </Link>
          </button>
          <p className="text-right text-primary font-weight-bold mt-3">
            <Link to="/login">Already have an account? Sign in</Link>
          </p>
        </MDBCardBody>
      </MDBCol>
    </Row>
  );
};

export default PaymentInformation;
