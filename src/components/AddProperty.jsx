// import React, { useContext, useEffect } from 'react'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { addProjectAPI } from '../services/allApi';
// import { ToastContainer, toast } from 'react-toastify';
// import { addResponseContext } from '../context/ContextShare';

// function AddProject() {

//   const {setAddResponse} = useContext(addResponseContext)

//   const [show, setShow] = useState(false);
//   const [preview, setPreview] = useState("")
//   console.log(preview);
//   const [token, setToken] = useState("")

//   const [key , setKey] = useState(1)

//   const [projectDetails, setProjectDetails] = useState({
//     title: "",
//     place: "",
//     overview: "",
//     price: "",
//     rooms: "",
//     projectImage: ""
//   })
//   console.log(projectDetails);

//   const handleFile = (e) => {
//     // console.log(e.target.files[0]);
//     setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })
//   }

//   useEffect(() => {
//     if (projectDetails.projectImage) {
//       setPreview(URL.createObjectURL(projectDetails.projectImage))
//     }
//   }, [projectDetails.projectImage])

//   const handleClose = () => {
//     setShow(false);
//     handleCancel()
//   }
//   const handleShow = () => setShow(true);
//   const handleCancel = () => {
//     setProjectDetails({
//       title: "",
//       place: "",
//       overview: "",
//       price: "",
//       rooms: "",
//       projectImage: ""
//     })
//     setPreview("")
//     if(key == 1){
//       setKey(0)
//     }else{
//       setKey(1)
//     }
//   }

//   const handleAdd = async () => {
//     const { title, place, overview, price, rooms, projectImage } = projectDetails
//     if(! title || !place || !overview|| !price|| !rooms || !projectImage ){
//       alert(`Fill the form Completly`)
//     }else{
//       // append() - if the request contain uploaded content the reqBody should be created with the help of uppend method in form-data class.  in short reqBody should be a formData

//       const reqBody = new FormData()
//       reqBody.append("title", title)
//       reqBody.append("price", price)
//       reqBody.append("overview", overview)
//       reqBody.append("price", price)
//       reqBody.append("rooms", rooms)
//       reqBody.append("projectImage", projectImage)

//       if(token){
//         const reqHeader = {
//           "Content-Type" : "multipart/form-data",
//           "Authorization" : `Bearer ${token}`
//         }
//           // api call
//         const result = await addProjectAPI(reqBody, reqHeader)
//         console.log(result);
//         if(result.status == 200){
//           toast.success(`Project added successfully`)
//           setTimeout(()=>{
//             handleClose()
//           },2000)
//           setAddResponse(result)
//         }else if(result.status == 406){
//           toast.warning(result.response.data)
//         }else{
//           toast.error(`Something went wrong`)
//         }
//       }  
//     }
//   }

// useEffect(()=>{
//   if(sessionStorage.getItem("token")){
//     setToken(sessionStorage.getItem("token"))
//   }
// },[])

//   return (
//     <>
//       <button onClick={handleShow} className='btn btn-success rounded-0 px-4'>Add Property</button>
//       <Modal show={show} onHide={handleClose} centered size='lg'>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Property Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6">
//                 <label htmlFor="projectImage" className='mb-3'>
//                   <input key={key} id='projectImage' type="file" onChange={(e) => handleFile(e)} style={{ display: "none" }} />
//                   <img src={preview ? preview : "https://m.media-amazon.com/images/I/71sKzRQtXtL.png"} alt="" className='img-fluid' />
//                 </label>
//               </div>
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <input type="text" value={projectDetails.title} onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} className='form-control' placeholder='Title' />
//                 </div>
//                 <div className="mb-3">
//                   <input type="text" value={projectDetails.place} onChange={(e) => setProjectDetails({ ...projectDetails, place: e.target.value })} className='form-control' placeholder='place' />
//                 </div>
//                 <div className="mb-3">
//                 <textarea rows={5} value={projectDetails.overview} onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })} className='form-control' placeholder='overview'> </textarea>
//                 </div>
//                 <div className="mb-3">
//                   <input type="text" value={projectDetails.price} onChange={(e) => setProjectDetails({ ...projectDetails, price: e.target.value })} className='form-control' placeholder='price' />
//                 </div>
//                 <div className="mb-3">
//                   <input type="text" value={projectDetails.rooms} onChange={(e) => setProjectDetails({ ...projectDetails, rooms: e.target.value })} className='form-control' placeholder='rooms' />

//                 </div>
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="warning me-3" onClick={handleCancel}>
//             Cancel
//           </Button>
//           <Button variant="success" onClick={handleAdd}>
//             Add Property
//           </Button>
//         </Modal.Footer>
//         <ToastContainer  position="top-center" theme="colored" autoClose={2000}/>
//       </Modal>
//     </>
//   )
// }

// export default AddProject


// import React, { useContext, useEffect, useState } from 'react';
// import { Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';
// import { addProjectAPI } from '../services/allApi';
// import { ToastContainer, toast } from 'react-toastify';
// import { addResponseContext } from '../context/ContextShare';

// function AddProject() {
//   const { setAddResponse } = useContext(addResponseContext);
//   const [show, setShow] = useState(false);
//   const [preview, setPreview] = useState("");
//   const [token, setToken] = useState("");
//   const [key, setKey] = useState(1);

//   const [projectDetails, setProjectDetails] = useState({
//     title: "",
//     place: "",
//     overview: "",
//     price: "",
//     rooms: "",
//     projectImage: ""
//   });

//   useEffect(() => {
//     if (projectDetails.projectImage) {
//       setPreview(URL.createObjectURL(projectDetails.projectImage));
//     }
//   }, [projectDetails.projectImage]);

//   useEffect(() => {
//     if (sessionStorage.getItem("token")) {
//       setToken(sessionStorage.getItem("token"));
//     }
//   }, []);

//   const handleFile = (e) => {
//     setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] });
//   };

//   const handleClose = () => {
//     setShow(false);
//     handleCancel();
//   };
//   const handleShow = () => setShow(true);

//   const handleCancel = () => {
//     setProjectDetails({
//       title: "",
//       place: "",
//       overview: "",
//       price: "",
//       rooms: "",
//       projectImage: ""
//     });
//     setPreview("");
//     setKey((prevKey) => (prevKey === 1 ? 0 : 1));
//   };

//   const handleAdd = async () => {
//     const { title, place, overview, price, rooms, projectImage } = projectDetails;
//     if (!title || !place || !overview || !price || !rooms || !projectImage) {
//       toast.warning("Please fill out all fields.");
//       return;
//     }

//     const reqBody = new FormData();
//     reqBody.append("title", title);
//     reqBody.append("place", place);
//     reqBody.append("overview", overview);
//     reqBody.append("price", price);
//     reqBody.append("rooms", rooms);
//     reqBody.append("projectImage", projectImage);

//     if (token) {
//       const reqHeader = {
//         "Content-Type": "multipart/form-data",
//         "Authorization": `Bearer ${token}`
//       };

//       const result = await addProjectAPI(reqBody, reqHeader);
//       if (result.status === 200) {
//         toast.success("Project added successfully");
//         setTimeout(() => {
//           handleClose();
//         }, 2000);
//         setAddResponse(result);
//       } else {
//         toast.error(result.response?.data || "Something went wrong");
//       }
//     }
//   };

//   return (
//     <>
//       <Button variant="success" onClick={handleShow} className="rounded-0 px-4">Add Property</Button>
//       <Modal show={show} onHide={handleClose} centered size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Add Property Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Container>
//             <Row>
//               <Col md={6} className="text-center">
//                 <Form.Group>
//                   <Form.Label htmlFor="projectImage">
//                     <Form.Control
//                       key={key}
//                       id='projectImage'
//                       type="file"
//                       onChange={handleFile}
//                       style={{ display: "none" }}
//                     />
//                     <img src={preview || "https://m.media-amazon.com/images/I/71sKzRQtXtL.png"} alt="Preview" className='img-fluid' />
//                   </Form.Label>
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form>
//                   <Form.Group className="mb-3">
//                     <Form.Control type="text" value={projectDetails.title} onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} placeholder='Title' />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Control type="text" value={projectDetails.place} onChange={(e) => setProjectDetails({ ...projectDetails, place: e.target.value })} placeholder='Place' />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Control as="textarea" rows={3} value={projectDetails.overview} onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })} placeholder='Overview' />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Control type="text" value={projectDetails.price} onChange={(e) => setProjectDetails({ ...projectDetails, price: e.target.value })} placeholder='Price' />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Control type="text" value={projectDetails.rooms} onChange={(e) => setProjectDetails({ ...projectDetails, rooms: e.target.value })} placeholder='Rooms' />
//                   </Form.Group>
//                 </Form>
//               </Col>
//             </Row>
//           </Container>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="warning" onClick={handleCancel}>Cancel</Button>
//           <Button variant="success" onClick={handleAdd}>Add Property</Button>
//         </Modal.Footer>
//         <ToastContainer position="top-center" theme="colored" autoClose={2000} />
//       </Modal>
//     </>
//   );
// }

// export default AddProject;




// import React, { useContext, useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faX } from '@fortawesome/free-solid-svg-icons';
// import { addResponseContext } from '../context/ContextShare';
// import { addProjectAPI } from '../services/allApi';

// function AddProperty() {
//   const { setAddResponse } = useContext(addResponseContext);
//   const [show, setShow] = useState(false);
//   const [preview, setPreview] = useState("");
//   const [token, setToken] = useState("");
//   const [key, setKey] = useState(1);

//   const [projectDetails, setProjectDetails] = useState({
//     title: "",
//     place: "",
//     overview: "",
//     price: "",
//     rooms: "",
//     projectImage: ""
//   });

//   useEffect(() => {
//     if (projectDetails.projectImage) {
//       setPreview(URL.createObjectURL(projectDetails.projectImage));
//     }
//   }, [projectDetails.projectImage]);


//   const handleFile = (e) => {
//     setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] });
//   };

//   const handleClose = () => {
//     setShow(false);
//     handleCancel();
//   };
//   const handleShow = () => setShow(true);

//   const handleCancel = () => {
//     setProjectDetails({
//       title: "",
//       place: "",
//       overview: "",
//       price: "",
//       rooms: "",
//       projectImage: ""
//     });
//     setPreview("");
//     setKey((prevKey) => (prevKey === 1 ? 0 : 1));
//   };

//   const handleAdd = async () => {
//     const { title, place, overview, price, rooms, projectImage } = projectDetails;
//     if (!title || !place || !overview || !price || !rooms || !projectImage) {
//       toast.warning("Please fill out all fields.");
//       return;
//     }

//     const reqBody = new FormData();
//     reqBody.append("title", title);
//     reqBody.append("place", place);
//     reqBody.append("overview", overview);
//     reqBody.append("price", price);
//     reqBody.append("rooms", rooms);
//     reqBody.append("projectImage", projectImage);

//     if (token) {
//       const reqHeader = {
//         "Content-Type": "multipart/form-data",
//         "Authorization": `Bearer ${token}`
//       };

//       const result = await addProjectAPI(reqBody, reqHeader);
//       if (result.status === 200) {
//         toast.success("Project added successfully");
//         setTimeout(() => {
//           handleClose();
//         }, 2000);
//         setAddResponse(result);
//       } else {
//         toast.error(result.response?.data || "Something went wrong");
//       }
//     }
//   };

//   useEffect(() => {
//     if (sessionStorage.getItem("token")) {
//       setToken(sessionStorage.getItem("token"));
//     }
//   },[]);


//   return (
//     <>
//       <div className="flex justify-end">
//         <button onClick={handleShow} className='bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition'>Add Project</button>
//       </div>
//       {show && (
//         <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4">
//           <div className=" rounded-lg bg-cyan-950 shadow-lg max-w-md w-full p-6 border border-gray-300">
//             <div className="flex justify-between items-center border-b pb-2">
//               <h2 className="text-xl font-semibold">Add Property Details</h2>
//               <button onClick={handleClose} className="text-gray-500 hover:text-gray-700"><FontAwesomeIcon icon={faX} /></button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div className="text-center">
//                 <label htmlFor="projectImage" className="cursor-pointer">
//                   <input key={key} id='projectImage' type="file" onChange={handleFile} className="hidden" />
//                   <img src={preview || "https://static.thenounproject.com/png/1022472-200.png"} alt="Preview" className='w-full h-40 object-cover rounded-md' />
//                 </label>
//               </div>
//               <div>
//                 <input type="text" value={projectDetails.title} onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} className='w-full p-2 border rounded-md' placeholder='Title' />
//                 <input type="text" value={projectDetails.place} onChange={(e) => setProjectDetails({ ...projectDetails, place: e.target.value })} className='w-full p-2 border rounded-md mt-2' placeholder='Place' />
//                 <textarea rows={3} value={projectDetails.overview} onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })} className='w-full p-2 border rounded-md mt-2' placeholder='Overview'></textarea>
//                 <input type="text" value={projectDetails.price} onChange={(e) => setProjectDetails({ ...projectDetails, price: e.target.value })} className='w-full p-2 border rounded-md mt-2' placeholder='Price' />
//                 <input type="text" value={projectDetails.rooms} onChange={(e) => setProjectDetails({ ...projectDetails, rooms: e.target.value })} className='w-full p-2 border rounded-md mt-2' placeholder='Rooms' />
//               </div>
//             </div>
//             <div className="flex justify-end space-x-2 mt-4">
//               <button onClick={handleCancel} className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition">Cancel</button>
//               <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition">Add Property</button>
//             </div>
//             <ToastContainer position="top-center" theme="colored" autoClose={2000} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default AddProperty;


import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faUpload } from '@fortawesome/free-solid-svg-icons';
import { addResponseContext } from '../context/ContextShare';
import { addProjectAPI } from '../services/allApi';

function AddProperty() {
  const { setAddResponse } = useContext(addResponseContext);
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState("");
  const [token, setToken] = useState("");
  const [key, setKey] = useState(1);

  const [projectDetails, setProjectDetails] = useState({
    title: "",
    place: "",
    overview: "",
    price: "",
    rooms: "",
    projectImage: ""
  });

  useEffect(() => {
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage));
    }
  }, [projectDetails.projectImage]);

  const handleFile = (e) => {
    setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] });
  };

  const handleClose = () => {
    setShow(false);
    handleCancel();
  };
  const handleShow = () => setShow(true);

  const handleCancel = () => {
    setProjectDetails({
      title: "",
      place: "",
      overview: "",
      price: "",
      rooms: "",
      projectImage: ""
    });
    setPreview("");
    setKey((prevKey) => (prevKey === 1 ? 0 : 1));
  };

  const handleAdd = async () => {
    const { title, place, overview, price, rooms, projectImage } = projectDetails;
    if (!title || !place || !overview || !price || !rooms || !projectImage) {
      toast.warning("Please fill out all fields.");
      return;
    }

    const reqBody = new FormData();
    reqBody.append("title", title);
    reqBody.append("place", place);
    reqBody.append("overview", overview);
    reqBody.append("price", price);
    reqBody.append("rooms", rooms);
    reqBody.append("projectImage", projectImage);

    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      };

      const result = await addProjectAPI(reqBody, reqHeader);
      if (result.status === 200) {
        toast.success("Property added successfully");
        setTimeout(() => {
          handleClose();
        }, 2000);
        setAddResponse(result);
      } else {
        toast.error(result.response?.data || "Something went wrong");
      }
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
  }, []);

  return (
    <>
      <div className="flex justify-end mb-6">
        <button
          onClick={handleShow}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium hover:from-green-700 hover:to-green-600"
        >
          Add Property
        </button>
      </div>

      {show && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full p-6 border border-gray-700 animate-fade-in">
            <div className="flex justify-between items-center border-b border-gray-700 pb-4">
              <h2 className="text-2xl font-bold text-white">Add New Property</h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FontAwesomeIcon icon={faX} size="lg" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex flex-col items-center">
                <label
                  htmlFor="projectImage"
                  className="cursor-pointer group relative w-full h-64 flex items-center justify-center border-2 border-dashed border-gray-600 rounded-xl hover:border-blue-500 transition-colors"
                >
                  <input
                    key={key}
                    id='projectImage'
                    type="file"
                    onChange={handleFile}
                    className="hidden"
                  />
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className='w-full h-full object-cover rounded-lg'
                    />
                  ) : (
                    <div className="text-center p-4">
                      <FontAwesomeIcon
                        icon={faUpload}
                        className="text-4xl text-gray-500 group-hover:text-blue-500 mb-2 transition-colors"
                      />
                      <p className="text-gray-400 group-hover:text-white">Upload Property Image</p>
                      <p className="text-xs text-gray-500 mt-1">(JPEG, PNG, WEBP)</p>
                    </div>
                  )}
                </label>
              </div>

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={projectDetails.title}
                    onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })}
                    className='w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500'
                    placeholder='Property Title'
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={projectDetails.place}
                    onChange={(e) => setProjectDetails({ ...projectDetails, place: e.target.value })}
                    className='w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500'
                    placeholder='Location'
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    value={projectDetails.overview}
                    onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })}
                    className='w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500'
                    placeholder='Description'
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      value={projectDetails.price}
                      onChange={(e) => setProjectDetails({ ...projectDetails, price: e.target.value })}
                      className='w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500'
                      placeholder='Price ($)'
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={projectDetails.rooms}
                      onChange={(e) => setProjectDetails({ ...projectDetails, rooms: e.target.value })}
                      className='w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500'
                      placeholder='Rooms'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={handleCancel}
                className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
              >
                Add Property
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={2000}
        toastClassName="font-medium"
      />
    </>
  );
}

export default AddProperty;