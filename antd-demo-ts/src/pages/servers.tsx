import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { Menu } from "antd"
import { Link } from 'react-router-dom';
import { Avatar } from "antd"
import "../App.css"
import { DollarTwoTone, DatabaseTwoTone, Loading3QuartersOutlined, HomeTwoTone, BellTwoTone, MessageTwoTone,SettingTwoTone, FundTwoTone} from '@ant-design/icons';
import { Card, Row, Col } from "antd"
import { Mentions } from 'antd'
import { Divider, Table } from 'antd'

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
    name: string;
    age: number;
    address: string;
  }
  const { Column } = Table;
  const data = [
    {
      key: '1',
      serverName: 'KHIS Server',
      serverURL: 'http://khis.health.go.ke',
      lastSyncDate: '17/07/2023 13:00',
      syncStatus: 'Complete',
      linkedSessions: ['&#xe8b6;', '&#xe8b6;', '&#xe8b6;'],
    },
    {
      key: '2',
      serverName: '3PM Server',
      serverURL: 'http://3pm.nascop.org',
      lastSyncDate: '12/07/2023 12:20',
      syncStatus: 'Complete',
      linkedSessions: ['&#xe8b6;', '&#xe8b6;', '&#xe8b6;'],
    },
    {
      key: '3',
      serverName: 'DATIM Server',
      serverURL: 'http://datim.org',
      lastSyncDate: '01/07/2023 04:25',
      syncStatus: 'Pending',
      linkedSessions: ['&#xe8b6;', '&#xe8b6;', '&#xe8b6;'],
    },
    {
      key: '4',
      serverName: 'DHIS2 Server',
      serverURL: 'http://dhis2server2.com',
      lastSyncDate: '17/07/2023 13:00',
      syncStatus: 'Failed',
      linkedSessions: ['&#xe8b6;', '&#xe8b6;', '&#xe8b6;'],
    },
    {
      key: '5',
      serverName: 'KHIS Server',
      serverURL: 'http://dhisserver3.org',
      lastSyncDate: '17/07/2023 13:00',
      syncStatus: 'Failed',
      linkedSessions: ['&#xe8b6;', '&#xe8b6;', '&#xe8b6;'],
    },
   
  ];
  
const Servers: React.FC = () => (  
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
      <h2 className='title_2'>Servers</h2>
       <h3 className='title_3'>DHIS2 Instances</h3>
       <Row gutter={16}>
    <Col span={8}>
      <Card className='new' title="Total Servers" bordered={true}>
        5
      </Card>
    </Col>
    <Col span={8}>
      <Card className='new'title="Mapped Sessions" bordered={true}>
        2
      </Card>
    </Col>
    <Col span={8}>
      <Card className='red' title="Average Sync Timeline" bordered={true}>
        1 Month
      </Card>
    </Col>
  </Row>
  <Mentions
  style={{ width:'100%'}}
  placement='top'
  options={[
    {
      value:'yesmeck',
      label:'search'
    }
  ]}
  >
  </Mentions>
      </Content>
      <Footer >
        <Divider></Divider>
        <div className="servers-table-container">
      <Table dataSource={data} className="table servers-table" pagination={false}>
        <Column title="Server Name" dataIndex="serverName" key="serverName" />
        <Column title="Server URL" dataIndex="serverURL" key="serverURL" />
        <Column title="Last Sync Date" dataIndex="lastSyncDate" key="lastSyncDate" />
        <Column title="Sync Status" dataIndex="syncStatus" key="syncStatus" 
         render={(text: string) => {
           let color: string;

           switch (text) {
             case 'Failed':
               color = 'red';
               break;
             case 'Complete':
               color = 'green';
               break;
               case 'Pending':
                color = 'grey';
                break;
             default:
               color = 'black';
           }
           return <span style={{ color }}>{text}</span>;
         }}
        />
        <Column
          title="Linked Sessions"
          dataIndex="linkedSessions"
          key="linkedSessions"
          render={(linkedSessions: string[]) => (
            <Space size="middle">
              {linkedSessions.map((symbol, index) => (
                <span key={index} dangerouslySetInnerHTML={{ __html: symbol }} />
              ))}
            </Space>
          )}
        />
        <Column
          title="View More"
          key="action"
          render={() => (
            <Space size="middle">
              <span >▶</span>
              <p className='span'>view more</p>
            </Space>
          )}
        />
      </Table>
    </div>
      </Footer>
    </Layout>
  </Layout>
);

export default Servers;