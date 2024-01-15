import React from "react";
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input, Button, Typography, Form,Checkbox } from 'antd';
import Image from "../assets/image1.png";
import Logo1 from "../assets/dhis21.png";
import Logo2 from "../assets/image 21.png";
import Logo3 from "../assets/image 22.png";
import Logo4 from "../assets/image 23.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
const { Text } = Typography;

const Login: React.FC = () => {
    const onFinish = (values: any ) => {
        console.log("Received values of form:", values);
    };
  return (
    <Card>
      <Row gutter={16}>
        <Col md={12}>
          <div
            style={{
              backgroundColor: "#001234",
              marginBottom: "0px",
              paddingBottom: "10px",
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={Image}
              alt="login form"
              style={{ height: '100%', width: '670px' }}
            />
          </div>
        </Col>
        {/* form */}
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
      </Row>
      <Row gutter={16}>
        <Col md={6}>
          <div
            style={{
              backgroundColor: "#001234",
              padding: "70px",
              textAlign: "left",
              paddingTop: "18px",
              width: '100%',
              height: '200px',
              font: 'inter',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '0.5px',
            }}
          >
            <p style={{ color: "#fff", margin: "0" }}>
              The comprehensive and user-friendly platform that facilitates
              seamless data exchange between DHIS2 instances, as well as other
              data collection tools like Commcare, Kobo Toolbox, and ODK. Its
              interface facilitates both one-time and scheduled data exchange.
            </p>
          </div>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col md={6}>
          <div
            style={{
              margin: "0",
              backgroundColor: "#001234",
              textAlign: "left",
              padding: "70px",
              width: '100%',
              height: '111px',
              font: 'inter',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '0.5px',
            }}
          >
            <h1 style={{ color: "#fff", fontSize: "2rem" }}>
              Welcome to D2S Stream
            </h1>
            <p style={{ color: "#fff", fontSize: "" }}>
              {" "}
              D2S: Automating Data Exchange for DHIS2 and Beyond
            </p>
          </div>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col md={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#001234",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={Logo1}
                  alt="Logo 1"
                  style={{ marginBottom: "10px" }}
                />
                <img src={Logo2} alt="Logo 2" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={Logo3}
                  alt="Logo 3"
                  style={{ marginBottom: "10px" }}
                />
                <img src={Logo4} alt="Logo 4" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Login;
