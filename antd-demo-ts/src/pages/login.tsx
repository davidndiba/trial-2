import React from "react";
import { Card, Row, Col, Input, Button, Typography, Form, Checkbox, Divider } from 'antd';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Image from "../assets/image1.png";
import Logo1 from "../assets/dhis21.png";
import Logo2 from "../assets/image 21.png";
import Logo3 from "../assets/image 22.png";
import Logo4 from "../assets/image 23.png";
import "../App.css"
import { Link } from "react-router-dom";

const { Text } = Typography;

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };

  return (
    <Row>
      <Col span={12}>
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
              style={{ height: '100%', width: '114%' }}
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
              <p className="mike" style={{ color: "#fff", margin: "0" }}>
                The comprehensive and user-friendly platform that facilitates
                seamless data exchange between DHIS2 instances, as well as other
                data collection tools like Commcare, Kobo Toolbox, and ODK. Its
                interface facilitates both one-time and scheduled data exchange.
              </p>
              <Divider></Divider>
              <div className="custom-content">
    <p className="additional-text" style={{ color: "#fff", margin: "0" }}>
     Welcome to D2S Data Exchange
    </p>
    <p className="mike">D2S: Automating Data Exchange for DHIS2 and Beyond</p>
    <img src={Logo1} alt="Image 1" className="additional-image" />
    <img src={Logo2} alt="Image 2" className="additional-image" />
    <img src={Logo3} alt="Image 2" className="additional-image" />
    <img src={Logo4} alt="Image 2" className="additional-image" />
  </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col span={12}>
      <Card className="login-card">
  <Form
    name="normal_login"
    className="login-form"
    initialValues={{ remember: true }}
    onFinish={onFinish}
  >
    <h1 className="sign-in-title">Sign In to Your Account</h1>
    <Form.Item
      name="username"
      rules={[
        { required: true, message: 'Please input your Username!' },
      ]}
    >
      <Input
        prefix={<UserOutlined className="site-form-item-icon" />}
        placeholder="Username"
      />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        { required: true, message: 'Please input your Password!' },
      ]}
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
    <Link to="/overview">Log in</Link>
  </Button>
  Or <Link to="/register">register now!</Link>
</Form.Item>
  </Form>
</Card>
      </Col>
    </Row>
  );
};

export default Login;
