
// import React from "react";
// import { Card, Row, Col, Input, Button, Typography, Form, Checkbox, Avatar } from 'antd';
// import Image from "../assets/image1.png";
// import { Link } from "react-router-dom";
// import { Select } from 'antd';

// const { Option } = Select;

// const { Text } = Typography;

// const OrganizationDetails: React.FC = () => {
//   const onFinish = (values: any) => {
//     console.log("Received values of form:", values);
//   };

//   return (
//     <Row gutter={16}>
//       <Col md={12}>
//         <Card>
//           <div
//             style={{
//               backgroundColor: "#001234",
//               height: '130vh',
//               width: '300%', 
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <img
//               src={Image}
//               alt="login form"
//               style={{ height: '100%', width: '115%' }}
//             />
//             <div
//               style={{
//                 backgroundColor: "#001234",
//                 padding: "40px",
//                 textAlign: "left",
//                 width: '100%',
//                 font: 'inter',
//                 fontWeight: '400',
//                 fontSize: '16px',
//                 lineHeight: '24px',
//                 letterSpacing: '0.5px',
//               }}
//             >
//               <p className="welcome-text" style={{ color: "#fff", margin: "0" }}>
//                 Welcome to D2S Stream
//               </p>

//               <div className="avatar-row">
//                 <Link to="/register" className="avatar-item">
//                   <Avatar size={34} style={{ backgroundColor: "#ffffff", color: "black" }}>1</Avatar>
//                   <p className="avatar-text">User Details</p>
//                 </Link>
//                 <Link to="/organizationDetails" className="avatar-item">
//                   <Avatar size={34} style={{ backgroundColor: "#ffffff", color: "black" }}>2</Avatar>
//                   <p className="avatar-text">Organization Details</p>
//                 </Link>
//                 <Link to="/paymentInformation" className="avatar-item">
//                   <Avatar size={34} style={{ backgroundColor: "#ffffff", color: "black" }}>3</Avatar>
//                   <p className="avatar-text">Payment Information</p>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Card>
//       </Col>
//       <Col md={12}>
//         <Card className="login-card">
//           <div className="d-flex flex-column align-items-center card-body">
//             <h1 className="fw-normal my-4 pb-3" style={{ letterSpacing: '0.5px' }}>
//               Set Up Your Organization Account
//             </h1>

//             <div className="mb-4 d-flex">
//   <div className="col">
//     <div className="mb-2">
//       <label htmlFor="firstName" className="form-label">
//        Organization Name
//       </label>
//       <Input id="firstName" type="text" />
//     </div>

//     <div className="mb-2">
//       <label htmlFor="email" className="form-label">
//       Job Title 
//       </label>
//       <Input id="email" type="email" />
//     </div>
//   </div>

//   <div className="col">
//   <div className="mb-2">
//     <label htmlFor="country" className="form-label">
//       Choose Country Of Origin
//     </label>
//     <Select
//       id="country"
//       placeholder="Select country"
//       style={{ width: '100%' }}
//     >
//       <Option value="usa">USA</Option>
//       <Option value="uk">UK</Option>
//     </Select>
//   </div>

//   <div className="mb-2">
//     <label htmlFor="industry" className="form-label">
//       Choose Organization Industry Of Operation
//     </label>
//                    <Select
//                           id="industry"
//                           placeholder="Select industry"
//                          style={{ width: '100%' }}
//                        >
//                           <Option value="it">IT</Option>
//                           <Option value="finance">Finance</Option>
//                         </Select>
//                       </div>
//                     </div>
//                   </div>
//                  </div>
//             <button className="btn btn-primary mb-3 px-5" style={{backgroundColor:"#0593B8"}}>
//               <Link to="/paymentInformation" className="text-white-text-decoration-none">
//                 Save and Continue
//               </Link>
//             </button>

//             <p className="text-right text-primary font-weight-bold mt-3">
//               <Link to="/login">Already have an account? Sign in</Link>
//             </p>
//         </Col>
//         </Card>
//     </Row>
//   );
// };

// export default OrganizationDetails;
import React from "react";
import { Card, Row, Col, Input, Button, Typography, Form, Checkbox, Avatar, Select } from 'antd';
import Image from "../assets/image1.png";
import { Link } from "react-router-dom";

const { Option } = Select;
const { Text } = Typography;

const OrganizationDetails: React.FC = () => {
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
              Set Up Your Organization Account
            </h1>

            <div className="mb-4 d-flex">
              <div className="col">
                <div className="mb-2">
                  <label htmlFor="firstName" className="form-label">
                    Organization Name
                  </label>
                  <Input id="firstName" type="text" />
                </div>

                <div className="mb-2">
                  <label htmlFor="email" className="form-label">
                    Job Title
                  </label>
                  <Input id="email" type="email" />
                </div>
              </div>

              <div className="col">
                <div className="mb-2">
                  <label htmlFor="country" className="form-label">
                    Choose Country Of Origin
                  </label>
                  <Select
                    id="country"
                    placeholder="Select country"
                    style={{ width: '100%' }}
                  >
                    <Option value="usa">USA</Option>
                    <Option value="uk">UK</Option>
                  </Select>
                </div>

                <div className="mb-2">
                  <label htmlFor="industry" className="form-label">
                    Choose Organization Industry Of Operation
                  </label>
                  <Select
                    id="industry"
                    placeholder="Select industry"
                    style={{ width: '100%' }}
                  >
                    <Option value="it">IT</Option>
                    <Option value="finance">Finance</Option>
                  </Select>
                </div>
              </div>
            </div>

            <button className="btn btn-primary mb-3 px-5" style={{ backgroundColor: "#0593B8" }}>
              <Link to="/paymentInformation" className="text-white-text-decoration-none">
                Save and Continue
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

export default OrganizationDetails;
