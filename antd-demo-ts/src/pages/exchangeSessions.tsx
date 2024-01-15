import React from 'react';
import { Layout, Flex, Typography, Space, Divider } from 'antd';
import { Menu } from "antd"
import { Link } from 'react-router-dom';
import { Dropdown ,Avatar } from "antd"
import "../App.css"
import { DollarTwoTone, DatabaseTwoTone, Loading3QuartersOutlined, HomeTwoTone, BellTwoTone, MessageTwoTone,SettingTwoTone, FundTwoTone} from '@ant-design/icons';
import { Card, Row, Col } from "antd"
import { Button } from 'antd';
import {  Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { Input } from 'antd'
import MappingContainer from '../components/MappingContainer';
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
  interface DataType {
    key: React.Key;
    Source: string;
    Destination: string;
    Map: string;
  }
  
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Source',
      dataIndex: 'source',
    },
    {
      title: 'Destination',
      dataIndex: 'destination',
    },
    {
      title: 'Map',
      dataIndex: 'map',
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      Source: 'Org-unit 1 Server 1',
      Destination: 'Org-unit 1 Server 2',
      Map: 'unmap',
    },
    {
      key: '2',
      Source: 'Org-unit 2 Server 1',
      Destination: 'Org-unit 2 Server 2',
      Map: 'unmap',
    },
    {
      key: '3',
      Source: 'Org-unit 3 Server 1',
      Destination: 'Org-unit 3 Server 2',
      Map: 'unmap',
    },
    {
      key: '4',
      Source: 'Org-unit 4 Server 1',
      Destination: 'Org-unit 4 Server 2',
      Map: 'unmap',
    },
    {
      key: '5',
      Source: 'Org-unit 5 Server 1',
      Destination: 'Org-unit 5 Server 2',
      Map: 'unmap',
    },
  ];
const ExchangeSessions: React.FC = () => (  
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
      <Content style={{ padding:'24px', backgroundColor:'#FFFFFF'}}>
      <h2 className='title_2'></h2>
      <Row gutter={12}>
    <Col span={6}>
      <Card title="Active Sessions" bordered={true}>
        6
        +2%increase from last month
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Transfer Jobs" bordered={true}>
        137/258
        +2%increase from last month
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Failed Jobs" bordered={true}>
        12
        +2%increase from last month
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Avg Data Transfer Rate" bordered={true}>
       256 Mbps
       +2%increase from last month
      </Card>
    </Col>
  </Row>
  <h2 className='title_2'></h2>
  <Card style={{ width:300 }}>
    <p>Source Details</p>
    <p>Server name: DHIS2 Server 1</p>
    <p>URL: http://...</p>
    <p>Last Synced: 13th Jul,2023 13:00</p>
    <p>Active: Yes</p>
    <p>Data Exchange:935 Mb</p>
    <p>Exchange Rate: 256 Mbps</p>
    <Divider></Divider>
    <p>Destination Details</p>
    <p>Server name: DHIS2 Server 1</p>
    <p>URL: http://...</p>
    <p>Last Synced: 13th Jul,2023 13:00</p>
    <p>Active: Yes</p>
    <p>Data Exchange:935 Mb</p>
    <p>Exchange Rate: 256 Mbps</p>
  </Card>
  <h2 className='title_2'></h2>
  <Card style={{ width:300}}>
     <p>Mapping Stats</p>
     <p>Org Units Mapped - 95%</p>
     <p>Dataset Mapped - 52%</p>
  </Card>
<Row gutter={[1, 1]}>
  <Col span={6}>
    <Button type="primary">
      Sessions
    </Button>
  </Col>
  <Col span={6}>
    <Button type="primary">
      Activity Log
    </Button>
  </Col>
  <Col span={6}>
    <Button type="primary">
      Mapping
    </Button>
  </Col>
  <Col span={6}>
    <Button type="primary">
      Scheduler
    </Button>
  </Col>
</Row>
<h2 className='title_2'>New Session</h2>
  <Row gutter={[1, 1]}>
    <Col span={12}>
      <h4>Server</h4>
      <Input placeholder="KHIS server (source)" />
    </Col>
    <Col span={12}>
      <h4>Server</h4>
      <Input placeholder="3PM Server (Destination)" />
    </Col>
  </Row>
  <Row gutter={[12, 12]}>
    <Col span={12}>
      <Input placeholder="Program Indicators" />
    </Col>
    <Col span={12}>
      <Input placeholder="Data Elements" />
    </Col>
  </Row>
  <h2></h2>
  <Row gutter={12}>
    <Col span={12}>
      <h4> Session Type</h4>
      <Input placeholder="KHIS server (source)" />
    </Col>
    <Col span={12}>
    <h4> Session Type</h4>
      <Input placeholder="3PM Server (Destination)" />
    </Col>
  </Row>
      </Content>
      <Footer >
        <MappingContainer/>
        <Table columns={columns} dataSource={data} size="small" />
      </Footer>
    </Layout>
  </Layout>
);

export default ExchangeSessions;