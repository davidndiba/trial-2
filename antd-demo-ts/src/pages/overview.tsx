import React from 'react';
import { Layout, Flex, Typography, Space } from 'antd';
import { Menu } from "antd"
import { Link } from 'react-router-dom';
import { Dropdown ,Avatar } from "antd"
import "../App.css"
import { DollarTwoTone, DatabaseTwoTone, Loading3QuartersOutlined, HomeTwoTone, BellTwoTone, MessageTwoTone,SettingTwoTone, FundTwoTone} from '@ant-design/icons';
import { Card, Row, Col } from "antd"

const { Header, Footer, Sider, Content } = Layout;
const { Text } = Typography
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
  };
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingInline: 48,
    height: 64,
    color: '#fff',
  };
const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    border: '1px solid #FFFFFF',
    color: '#FFFFFF',
    backgroundColor: '#FFFFFF',
  };
  
  const menuItemStyle: React.CSSProperties = {
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '0.1px',
    textAlign: 'left',
    color:"#0593B8"
  };
  
  
  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  };
  
  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: 'calc(50% - 8px)',
  };
const Overview: React.FC = () => (  
    <Layout style={siderStyle}>
    <Sider width="296px">
      <Menu mode="vertical">
        <h1 className='title_1'>D2S Data Exchange</h1>
        <Menu.Item key="Dashboard" style={{ backgroundColor: '#FFFFFF' }}>
          <Link to="/overview" style={menuItemStyle}>
          <DollarTwoTone /> Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="Servers" style={{ backgroundColor: '#FFFFFF' }}>
          <Link to="/servers" style={menuItemStyle}>
          <DatabaseTwoTone />Servers
          </Link>
        </Menu.Item>
        <Menu.Item key="Servers" style={{ backgroundColor: '#FFFFFF' }}>
          <Link to="/exchangeSessions" style={menuItemStyle}>
            <Loading3QuartersOutlined/>Exchange Sessions
          </Link>
        </Menu.Item>
        <Menu.Item key="Servers" style={{ backgroundColor: '#FFFFFF' }}>
          <Link to="/mapping" style={menuItemStyle}>
          <HomeTwoTone />Mapping
          </Link>
        </Menu.Item>
        <Menu.Item key="Servers" style={{ backgroundColor: '#FFFFFF' }}>
          <Link to="/messages" style={menuItemStyle}>
          <MessageTwoTone />Messages
          </Link>
        </Menu.Item>
        <Menu.Item key="Servers" style={{ backgroundColor: '#FFFFFF' }}>
          <Link to="/notifications" style={menuItemStyle}>
          <BellTwoTone />Notifications
          </Link>
        </Menu.Item>
        <Menu.Item key="Servers" style={{ backgroundColor: '#FFFFFF' }}>
          <Link to="/reports" style={menuItemStyle}>
          <FundTwoTone />Reports
          </Link>
        </Menu.Item>
        <Menu.Item key="Servers" style={{ backgroundColor: '#FFFFFF' }}>
          <Link to="/userSettings" style={menuItemStyle}>
          <SettingTwoTone />User Settings 
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
    <Header style={headerStyle}>
    <Text style={{ color: '' }} type="secondary">
      Home
    </Text>

    <Space>
      <BellTwoTone style={{ fontSize: '24px', color: '#fff' }} />
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Text style={{ color: 'black' }} type="secondary">
        John Doe
      </Text>
    </Space>
  </Header>
      <Content >
        <h2 className='title_2'>Overview</h2>
       <h3 className='title_3'>Status Summary</h3>
       <Row gutter={12}>
    <Col span={6}>
      <Card title="Servers" bordered={true}>
        18
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Sessions" bordered={true}>
        4
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Mapped Servers" bordered={true}>
        12
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Reporting APIs" bordered={true}>
       5
      </Card>
    </Col>
  </Row>
  <Row gutter={18}>
    <Col span={6}>
      <Card title="Exchange Sessions" bordered={true}/>
    </Col>
  </Row>
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Layout>
);

export default Overview;