
import React from "react";
import { Card, Row, Col, Input, Button, Typography, Form, Checkbox, Avatar } from 'antd';
import Image from "../assets/image1.png";
import { Link } from "react-router-dom";

const { Text } = Typography;

const Register: React.FC = () => {
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
      <Col md={12}>
        <Card className="login-card">
          <div className="d-flex flex-column align-items-center card-body">
            <h1 className="fw-normal my-4 pb-3" style={{ letterSpacing: '0.5px' }}>
              Set Up Your User Account
            </h1>

            <div className="mb-4 d-flex">
  <div className="col">
    <div className="mb-2">
      <label htmlFor="firstName" className="form-label">
        First Name
      </label>
      <Input id="firstName" type="text" />
    </div>

    <div className="mb-2">
      <label htmlFor="email" className="form-label">
        Email address
      </label>
      <Input id="email" type="email" />
    </div>
  </div>

  <div className="col">
    <div className="mb-2">
      <label htmlFor="lastName" className="form-label">
        Last Name
      </label>
      <Input id="lastName" type="text" />
    </div>

    <div className="mb-2">
      <label htmlFor="phoneNumber" className="form-label">
        + 254 Phone Number
      </label>
      <Input id="phoneNumber" type="tel" />
    </div>
  </div>
</div>

<div className="mb-4 w-90">
  <label htmlFor="password" className="form-label">
    Password
  </label>
  <Input id="password" type="password" />
</div>
            <button className="btn btn-primary mb-3 px-5" style={{backgroundColor:"#0593B8"}}>
              <Link to="/organizationdetails" className="text-white-text-decoration-none">
                Create Account
              </Link>
            </button>

            <p className="text-right text-primary font-weight-bold mt-3">
              <Link to="/login">Already have an account? Sign in</Link>
            </p>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
