
// import React, { useContext, useEffect } from 'react'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { serverURL } from '../services/serverUrl';
// import { updateUserProjectAPI } from '../services/allApi';
// import { editResponseContext } from '../context/ContextShare';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


// function Edit({projects}) {

//   const {setEditResponse} = useContext(editResponseContext)
//   const [show, setShow] = useState(false);
//   const [preview, setPreview] = useState("")
//   const [key, setKey] = useState(0)

//     const handleClose = () =>{
//       handleCancel()
//       setShow(false)
//     };

//     const handleShow = () => setShow(true);
//     // console.log(projects);
//     const [projectDetails, setProjectDetails] = useState({
//       title: projects?.title,
//       place: projects?.place,
//       overview: projects?.overview,
//       price: projects?.price,
//       rooms: projects?.rooms,
//       projectImage: ""
//     })
//     // console.log(projectDetails);

//     const handleFile = (e)=>{
//       // console.log(e.target.files);
//       setProjectDetails({...projectDetails, projectImage: e.target.files[0]})
//     }

//   const handleCancel =()=>{
//     setProjectDetails({
//       title:projects?.title,
//       place:projects?.place,
//       overview:projects?.overview,
//       price:projects?.price,
//       rooms:projects?.rooms,
//       projectImage:""
//     })
//     setPreview("")
//       if(key==0){
//         setKey(1)
//       }else{
//         setKey(0)
//       }

//   } 

// const handleUpdate = async()=>{
//   const {title,place,overview,price,rooms,projectImage} = projectDetails
//   console.log(title,place,overview,price,rooms,projectImage);
//   if(!title || !place || !overview || !price || !rooms){
//    alert(`please fill the form`)
//   }else{
//     //reqBody
//     const reqBody = new FormData()
//     reqBody.append("title",title)
//     reqBody.append("place",place)
//     reqBody.append("overview",overview)
//     reqBody.append("price",price)
//     reqBody.append("rooms",rooms)
//     preview ? reqBody.append("projectImage", projectImage) : reqBody.append("projectImage", projects.projectImage)

//     //reqHeader
//     const token = sessionStorage.getItem("token")
//     if(preview){
//       const reqHeader = {
//         "Content-Type" : "multipart/form-data",
//         "Authorization" : `Bearer ${token}`
//       }
//       const result = await updateUserProjectAPI(projects._id, reqBody, reqHeader)
//       console.log(result);

//       if(result.status ==200) {
//         setEditResponse(result)
//         toast.success(`project updated successfully`)
//         setTimeout(() => {
//           handleClose()
//         }, 3000);
//       } else if (result.status == 406) {
//         toast.warning(result.response.data)

//       }else{
//         toast.error("Something went wrong")
//       }






//     }else{
//       const reqHeader = {
//         "Content-Type" : "application/json",
//         "Authorization" : `Bearer ${token}`
//       }
//       const result = await updateUserProjectAPI(projects._id, reqBody, reqHeader)
//       console.log(result);

//       if(result.status ==200) {
//         setEditResponse(result)
//         toast.success(`project updated successfully`)
//         setTimeout(() => {
//           handleClose()
//         }, 3000);
//       } else if (result.status == 406) {
//         toast.warning(result.response.data)

//       }else{
//         toast.error("Something went wrong")
//       }

//     }

//   }

//     }
//     useEffect(()=>{
//       if(projectDetails.projectImage){
//         setPreview(URL.createObjectURL(projectDetails.projectImage))
//       }
//     }, [projectDetails.projectImage])

//     return (
//       <>
//         <FontAwesomeIcon onClick={handleShow} icon={faPenToSquare} className='text-info me-3' />
//         <Modal show={show} onHide={handleClose} centered size='lg'>
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Project Details</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-6">
//                   <label htmlFor="projectImage">
//                     <input key={key} onChange={(e)=>handleFile(e)} id='projectImage' type="file" style={{display:"none"}} />
//                     <img src={preview ? preview : `${serverURL}/upload/${projects?.projectImage}`} alt="" className='img-fluid' />
//                   </label>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="mb-3">
//                     <input onChange={(e)=>setProjectDetails({...projectDetails, title: e.target.value})} value={projectDetails.title} type="text" className='form-control' placeholder='Title' />
//                   </div>
//                   <div className="mb-3">
//                     <input onChange={(e)=>setProjectDetails({...projectDetails, place: e.target.value})} value={projectDetails.place} type="text" className='form-control' placeholder='place' />
//                   </div>
//                   <div className="mb-3">
//                     <input onChange={(e)=>setProjectDetails({...projectDetails, overview: e.target.value})} value={projectDetails.overview} type="text" className='form-control' placeholder='overview' />
//                   </div>
//                   <div className="mb-3">
//                     <input onChange={(e)=>setProjectDetails({...projectDetails, price: e.target.value})} value={projectDetails.price} type="text" className='form-control' placeholder='price' />
//                   </div>
//                   <div className="mb-3">
//                     <textarea onChange={(e)=>setProjectDetails({...projectDetails, rooms: e.target.value})} value={projectDetails.rooms} rows={5} className='form-control' placeholder='rooms'> </textarea>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="warning me-3" onClick={handleCancel}>
//               Cancel
//             </Button>
//             <Button variant="success" onClick={handleUpdate}>
//               Save Project
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     )
// }

// export default Edit



import React, { useContext, useEffect, useState } from 'react';
import { serverURL } from '../services/serverUrl';
import { updateUserProjectAPI } from '../services/allApi';
import { editResponseContext } from '../context/ContextShare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faUpload, faX } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';

function Edit({ projects }) {
    const { setEditResponse } = useContext(editResponseContext);
    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState("");
    const [key, setKey] = useState(0);

    const handleClose = () => {
        handleCancel();
        setShow(false);
    };
    const handleShow = () => setShow(true);

    const [projectDetails, setProjectDetails] = useState({
        title: projects?.title,
        place: projects?.place,
        overview: projects?.overview,
        price: projects?.price,
        rooms: projects?.rooms,
        projectImage: ""
    });

    const handleFile = (e) => {
        setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] });
    };

    const handleCancel = () => {
        setProjectDetails({
            title: projects?.title,
            place: projects?.place,
            overview: projects?.overview,
            price: projects?.price,
            rooms: projects?.rooms,
            projectImage: ""
        });
        setPreview("");
        setKey(key === 0 ? 1 : 0);
    };

    const handleUpdate = async () => {
        const { title, place, overview, price, rooms, projectImage } = projectDetails;
        if (!title || !place || !overview || !price || !rooms) {
            toast.warning("Please fill out all fields.");
            return;
        }

        const reqBody = new FormData();
        reqBody.append("title", title);
        reqBody.append("place", place);
        reqBody.append("overview", overview);
        reqBody.append("price", price);
        reqBody.append("rooms", rooms);
        preview ? reqBody.append("projectImage", projectImage) : reqBody.append("projectImage", projects.projectImage);

        const token = sessionStorage.getItem("token");
        const reqHeader = {
            "Content-Type": preview ? "multipart/form-data" : "application/json",
            "Authorization": `Bearer ${token}`
        };

        const result = await updateUserProjectAPI(projects._id, reqBody, reqHeader);
        if (result.status === 200) {
            setEditResponse(result);
            toast.success("Property updated successfully");
            setTimeout(() => handleClose(), 2000);
        } else {
            toast.error(result.response?.data || "Something went wrong");
        }
    };

    useEffect(() => {
        if (projectDetails.projectImage) {
            setPreview(URL.createObjectURL(projectDetails.projectImage));
        }
    }, [projectDetails.projectImage]);

    return (
        <>
           <FontAwesomeIcon onClick={handleShow} icon={faPenToSquare} className='text-info me-3' />
            
            {show && (
                <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
                    <div className="bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full p-6 border border-gray-700 animate-fade-in">
                        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                            <h2 className="text-2xl font-bold text-white">Edit Property</h2>
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
                                        <div className="text-center">
                                            <img
                                                src={`${serverURL}/upload/${projects?.projectImage}`}
                                                alt="Current"
                                                className='w-full h-full object-cover rounded-lg'
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <FontAwesomeIcon
                                                    icon={faUpload}
                                                    className="text-2xl text-white mb-2"
                                                />
                                                <p className="text-white text-sm">Click to change image</p>
                                            </div>
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
                                onClick={handleUpdate}
                                className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
                            >
                                Update Property
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

export default Edit;




