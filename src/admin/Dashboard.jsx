// import React from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
// import MyProperty from '../components/MyProperty'

// function Dashboard() {
//   return (
//     <>
//           <div className="p-4">
//         <h3>Welcome <span className='text-warning'>User</span></h3>
//         <Container>
//           <Row>
//             <Col sm={12} md={8}>
//               <MyProperty />
//             </Col>
//             <Col sm={12} md={4}>
// <div><h1>hi</h1></div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   )
// }

// export default Dashboard


// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import MyProperty from '../components/MyProperty';

// function Dashboard() {
//   return (
//     <div className="p-4 bg-gray-900 min-h-screen text-white">
//       {/* Welcome Text */}
//       <h3 className="text-xl font-semibold">
//         Welcome <span className="text-orange-400">User</span>
//       </h3>

//       {/* Main Content Container */}
//       <Container className="mt-4">
//         <Row className="justify-content-center">
//           <Col sm={12} md={10} className="bg-gray-800 p-4 rounded-lg shadow-lg">
//             <div className="flex justify-between items-center">
//             <MyProperty />
              
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Dashboard;






import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyProperty from '../components/MyProperty';

function Dashboard() {
  return (
    <div className="p-4 min-h-screen pt-20 bg-gray-50">
      {/* Welcome Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Admin <span className="text-blue-600">Dashboard</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Manage the properties 
          </p>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl rounded-lg">
            <div className="px-6 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Property Management
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                View and add the properties
              </p>
            </div>
            <div className="px-6 py-5">
              <MyProperty />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;