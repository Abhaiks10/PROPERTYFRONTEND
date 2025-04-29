// import React, { useContext, useEffect, useState } from 'react'
// import Edit from '../Components/Edit'
// import { getUserProjectsAPI, removeUserProjectAPI } from '../services/allApi'
// import { Link } from 'react-router-dom'
// import { addResponseContext, editResponseContext } from '../context/ContextShare'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaGlobe, FaTrash } from 'react-icons/fa'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import AddProperty from '../components/AddProperty'
// function MyProperty() {

//   const { addResponse } = useContext(addResponseContext)
//   const {editResponse} = useContext(editResponseContext)
//   const [userProject, setUserProject] = useState([])
//   const [removeStatus, setRemoveStatus] = useState({})

//   const getUserProject = async () => {
//     if (sessionStorage.getItem("token")) {
//       const token = sessionStorage.getItem("token");
//       const reqHeader = {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`
//       };
//       const result = await getUserProjectsAPI(reqHeader);
//       // console.log(result.data);
//       setUserProject(result.data);
//     }
//   };

//   console.log(userProject);

//   const handleDelete = async (id) => {
//     if (sessionStorage.getItem("token")) {
//       const token = sessionStorage.getItem("token");
//       const reqHeader = {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`
//       };
//       const result = await removeUserProjectAPI(id, reqHeader);
//       console.log(result);
//       if(result.status === 200){
//         alert("Project Deleted Successfully");
//         setRemoveStatus(result);
//       }else{
//         alert("Something went wrong");
//       }     
//     }
//   };

//   useEffect(() => {
//     getUserProject();
//   }, [addResponse, removeStatus, editResponse]);

//   return (
//     <>
//       <div className="p-5 shadow w-100">
//         <div className="d-flex justify-content-between mt-4">
//           <h3>My Projects</h3>
//           <AddProperty/>
//         </div>

//         {userProject ?
//           userProject?.map((item) => (
//             <div key={item?._id} className="p-3 bg-light mt-4 rounded d-flex align-items-center justify-content-between">
//               <h5>{item?.title}</h5>
//               <div className="d-flex mt-2">
//                 <Edit projects = {item} />
//                 <Link target='_blank' to={item?.github}><FontAwesomeIcon icon={faGithub} className='me-4 text-warning' /></Link>
//                 <Link target='_blank' to={item?.website}> <FontAwesomeIcon icon={FaGlobe} className='me-4 text-success' /></Link>
//                 <FontAwesomeIcon onClick={() => handleDelete(item?._id)} icon={FaTrash} className='me-4 text-danger' />
//               </div>
//             </div>
//           ))

//           :
//           <h1 className='text-danger text-center mt-3'>No Projects Added</h1>}

//       </div>

//     </>
//   )
// }

// export default MyProperty


// import React, { useContext, useEffect, useState } from 'react';
// import {  Row, Col, Card } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Edit from './Edit';
// import {  faTrash } from '@fortawesome/free-solid-svg-icons'
// import AddProperty from './AddProperty';
// import { toast, ToastContainer } from 'react-toastify';
// import { addResponseContext, editResponseContext } from '../context/ContextShare';
// import { getUserProjectsAPI, removeUserProjectAPI } from '../services/allApi';

// function MyProperty() {
//     const { addResponse } = useContext(addResponseContext);
//     const { editResponse } = useContext(editResponseContext);
//     const [userProject, setUserProject] = useState([]);
//     const [removeStatus, setRemoveStatus] = useState({});

//     const getUserProject = async () => {
//         if (sessionStorage.getItem("token")) {
//             const token = sessionStorage.getItem("token");
//             const reqHeader = {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${token}`
//             };
//             const result = await getUserProjectsAPI(reqHeader);
//             setUserProject(result.data);
//         }
//     };
//     console.log(userProject);
    

//     const handleDelete = async (id) => {
//         if (sessionStorage.getItem("token")) {
//             const token = sessionStorage.getItem("token");
//             const reqHeader = {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${token}`
//             };
//             const result = await removeUserProjectAPI(id, reqHeader);
//             if (result.status === 200) {
//                 toast.success("Project Deleted Successfully");
//                 setRemoveStatus(result);
//             } else {
//                 toast.error("Something went wrong");
//             }
//         }
//     };

//     useEffect(() => {
//         getUserProject();
//     }, [addResponse, removeStatus, editResponse]);

//     return (
//         <>
//             <div className="p-5 shadow w-100">
//                 <div className="d-flex justify-content-between mt-4">
//                     <h3>My Property</h3>
//                     <AddProperty />
//                 </div>
//                 {userProject ? (
//                     userProject?.map((item) => (
//                         <Card key={item?._id} className="mb-3 p-3 bg-light rounded">
//                             <Row className="align-items-center">
//                                 <Col><h5>{item?.title}</h5></Col>
//                                 <Col className="text-end">
//                                     <Edit projects={item} />
                                    
//                                     <FontAwesomeIcon onClick={() => handleDelete(item?._id)} icon={faTrash} className="text-danger cursor-pointer" />
//                                 </Col>
//                             </Row>
//                         </Card>
//                     ))
//                 ) : (
//                     <h1 className='text-danger text-center mt-3'>No Property Added</h1>
//                 )}
//             </div>
//             <ToastContainer position="top-center" theme="colored" autoClose={2000} />
//         </>
//     );
// }

// export default MyProperty;


//
// import React, { useContext, useEffect, useState } from 'react'
// import Edit from '../Components/Edit'
// import { getUserProjectsAPI, removeUserProjectAPI } from '../services/allApi'
// import { Link } from 'react-router-dom'
// import { addResponseContext, editResponseContext } from '../context/ContextShare'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaGlobe, FaTrash } from 'react-icons/fa'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import AddProperty from '../components/AddProperty'
// function MyProperty() {

//   const { addResponse } = useContext(addResponseContext)
//   const {editResponse} = useContext(editResponseContext)
//   const [userProject, setUserProject] = useState([])
//   const [removeStatus, setRemoveStatus] = useState({})

//   const getUserProject = async () => {
//     if (sessionStorage.getItem("token")) {
//       const token = sessionStorage.getItem("token");
//       const reqHeader = {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`
//       };
//       const result = await getUserProjectsAPI(reqHeader);
//       // console.log(result.data);
//       setUserProject(result.data);
//     }
//   };

//   console.log(userProject);

//   const handleDelete = async (id) => {
//     if (sessionStorage.getItem("token")) {
//       const token = sessionStorage.getItem("token");
//       const reqHeader = {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`
//       };
//       const result = await removeUserProjectAPI(id, reqHeader);
//       console.log(result);
//       if(result.status === 200){
//         alert("Project Deleted Successfully");
//         setRemoveStatus(result);
//       }else{
//         alert("Something went wrong");
//       }     
//     }
//   };

//   useEffect(() => {
//     getUserProject();
//   }, [addResponse, removeStatus, editResponse]);

//   return (
//     <>
//       <div className="p-5 shadow w-100">
//         <div className="d-flex justify-content-between mt-4">
//           <h3>My Projects</h3>
//           <AddProperty/>
//         </div>

//         {userProject ?
//           userProject?.map((item) => (
//             <div key={item?._id} className="p-3 bg-light mt-4 rounded d-flex align-items-center justify-content-between">
//               <h5>{item?.title}</h5>
//               <div className="d-flex mt-2">
//                 <Edit projects = {item} />
//                 <Link target='_blank' to={item?.github}><FontAwesomeIcon icon={faGithub} className='me-4 text-warning' /></Link>
//                 <Link target='_blank' to={item?.website}> <FontAwesomeIcon icon={FaGlobe} className='me-4 text-success' /></Link>
//                 <FontAwesomeIcon onClick={() => handleDelete(item?._id)} icon={FaTrash} className='me-4 text-danger' />
//               </div>
//             </div>
//           ))

//           :
//           <h1 className='text-danger text-center mt-3'>No Projects Added</h1>}

//       </div>

//     </>
//   )
// }

// export default MyProperty
//
///
////
//////

import React, { useContext, useEffect, useState } from 'react';
import {  Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Edit from './Edit';
import {  faTrash } from '@fortawesome/free-solid-svg-icons'
import AddProperty from './AddProperty';
import { toast, ToastContainer } from 'react-toastify';
import { addResponseContext, editResponseContext } from '../context/ContextShare';
import { getUserProjectsAPI, removeUserProjectAPI } from '../services/allApi';

function MyProperty() {
    const { addResponse } = useContext(addResponseContext);
    const { editResponse } = useContext(editResponseContext);
    const [userProject, setUserProject] = useState([]);
    const [removeStatus, setRemoveStatus] = useState({});

    const getUserProject = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token");
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };
            const result = await getUserProjectsAPI(reqHeader);
            setUserProject(result.data);
        }
    };
    console.log(userProject);
    

    const handleDelete = async (id) => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token");
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };
            const result = await removeUserProjectAPI(id, reqHeader);
            if (result.status === 200) {
                toast.success("Project Deleted Successfully");
                setRemoveStatus(result);
            } else {
                toast.error("Something went wrong");
            }
        }
    };

    useEffect(() => {
        getUserProject();
    }, [addResponse, removeStatus, editResponse]);

    return (
        <>
            <div className="p-5 shadow w-100">
                <div className="d-flex justify-content-between mt-4">
                    <h3 className='text-2xl text-bolder'>My Property</h3>
                   <div> < AddProperty /></div>
                </div>
                {userProject ? (
                    userProject?.map((item) => (
                        <Card key={item?._id} className="mb-3 p-3 bg-light rounded">
                            <Row className="align-items-center">
                                <Col><h5>{item?.title}</h5></Col>
                                    <Edit className="text-end" projects={item} />
                                    <FontAwesomeIcon onClick={() => handleDelete(item?._id)} icon={faTrash} className="text-danger cursor-pointer" />
                            
                            </Row>
                        </Card>
                    ))
                ) : (
                    <h1 className='text-danger text-center mt-3'>No Property Added</h1>
                )}
            </div>
            <ToastContainer position="top-center" theme="colored" autoClose={2000} />
        </>
    );
}

export default MyProperty;
