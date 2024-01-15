import React from 'react';
import { Layout, Typography, Space, Table,Tag, Divider } from 'antd';
import { Menu } from "antd"
import { Link } from 'react-router-dom';
import { Avatar } from "antd"
import "../App.css"
import { DollarTwoTone, DatabaseTwoTone, Loading3QuartersOutlined, HomeTwoTone, BellTwoTone, MessageTwoTone,SettingTwoTone, FundTwoTone} from '@ant-design/icons';
import { Card, Row, Col } from "antd"
import { Progress} from "antd"
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
    color:"#0593B8",
    backgroundColor:'#FFFFFF'
  };
  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: 'calc(50% - 8px)',
    backgroundColor:'#FFFFFF'
  };
  interface DataType {
    key: string;
    name: string;
    address: string;
    tags: string[];
  }
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_: any, { tags }: { tags?: string[] }) => (
        <>
          {tags && tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: DataType) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'KHIS/DATIM',
      address: 'Nairobi County Facilities',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'KHIS/3 PM',
      address: 'All Counties',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'DHIS2 Server 2/DHIS2 Server 3',
      address: 'Sub-county Level',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: 'DHIS2 Server 1/DHIS Server 3',
      address: 'National Level',
      tags: ['cool', 'teacher'],
    },
    {
      key: '5',
      name: 'DHIS2 Server 4/DHIS2 Server 5',
      address: 'CDC Program Facilities',
      tags: ['cool', 'teacher'],
    },
  ];
  
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
      <Card className="new" title="Servers" bordered={true}>
        18
      </Card>
    </Col>
    <Col span={6}>
      <Card className="new" title="Sessions" bordered={true}>
        4
      </Card>
    </Col>
    <Col span={6}>
      <Card className="new" title="Mapped Servers" bordered={true}>
        12
      </Card>
    </Col>
    <Col span={6}>
      <Card className="new" title="Reporting APIs" bordered={true}>
       5
      </Card>
    </Col>
  </Row>
  <h3 className='title_3'></h3>
  <Row gutter={18}>
    <Col span={12}>
      <Card title="Data Exchange Outcomes" bordered={true}/>
    </Col>
    <Col span={12}>
    <Card title='Data Exchange Sessions' bordered= {false}>
       Session A  <Progress percent={80} />
       Session B  <Progress percent={60} />
       Session C  <Progress percent={40} />
       Session D  <Progress percent={20} />
    </Card>
    </Col>
  </Row>
  <h3 className='title_3'>Performance</h3>
       <Row gutter={12}>
    <Col span={8}>
      <Card className="new" title="Active Servers" bordered={true}>
        6
        <h5 className='khis'>
        . KHIS - 257 Mbps        
        . DATIM - 256 Mbps
        </h5>
      </Card>
    </Col>
    <Col span={8}>
      <Card className="new" title="Data Mapping" bordered={true}>
        3,500
        <h5 className='khis'>
        .KHIS/DHIS-256
        .DATIM/3PM-158
        </h5>
      </Card>
    </Col>
    <Col span={8}>
      <Card className="new" title="Data Migrated" bordered={true}>
        1.4 Gb
        <h5 className='khis'>
        .KHIS Server-847 Mb
        .DATIM Server-746 Mb
        </h5>
      </Card>
    </Col>
  </Row>
      </Content>
      <Footer >
      <Table columns={columns} dataSource={data} />
      </Footer>
    </Layout>
  </Layout>
);

export default Overview;