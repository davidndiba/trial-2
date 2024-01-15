import React from "react";
import { Card, Row, Col, Avatar, Button } from 'antd';
import Image from "../assets/image1.png";
import { Link } from "react-router-dom";
import { CheckCircleOutlined } from "@ant-design/icons";

const PaymentInformation_1: React.FC = () => {
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
                  <Avatar className="change" size={34} style={{ backgroundColor: "#ffffff", color: "black" }}>3</Avatar>
                  <p className="avatar-text">Payment Information</p>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col md={12}>
        <div className="additional-content">
          <CheckCircleOutlined style={{ fontSize: '48px', color: '#0593B8' }} />
          <p className="additional-text-1">Your account profile has been created.</p>
          <p className="additional-text-2">Your details are currently under review.</p>
          <p className="additional-text-2">You will receive an account verification email once your details have been confirmed.</p>
          <Button type="primary" style={{ backgroundColor: '#0593B8' }}>
            <Link to="/overview" className="text-white text-decoration-none">
              Proceed To D2S Data Exchange
            </Link>
          </Button>
        </div>
      </Col>
    </Row>
      );
};

export default PaymentInformation_1;
