import React, { useState } from "react";
import { faX, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { serverURL } from "../services/serverUrl";
import { ToastContainer, toast } from 'react-toastify';

function PropertCard({ projects }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const handleContactAgent = (e) => {
    e.stopPropagation(); // Prevent the modal from opening
    // Implement your contact agent logic here
    toast.success(`Contacting agent for ${projects?.title}`);
  };
  return (
    <>
      <div
        className="relative w-full max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
        onClick={handleShow}
      >
        <img
          src={`${serverURL}/upload/${projects?.projectImage}`}
          alt={projects?.title}
          className="w-full h-52 object-cover"
        />
        <div className="p-4 text-center bg-white">
          <h3 className="text-xl font-semibold text-gray-800">{projects?.title}</h3>
          <p className="text-gray-600">{projects?.place}</p>
          <p style={{fontWeight:"bolder"}} className="text-2xl text-blue-600">{projects?.price}</p>

        </div>
      </div>

      {show && (
        <div className="fixed inset-0   bg-opacity-70 flex  p-4 z-50">
          <div className="bg-blue-50 rounded-lg shadow-lg max-w-lg w-full p-5 relative">
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
              onClick={handleClose}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
            <h3 className="text-xl font-bold text-gray-800 text-center">{projects?.title}</h3>
            <div className="mt-4 flex flex-col md:flex-row items-center">
              <img
                src={`${serverURL}/upload/${projects?.projectImage}`}
                alt="Project"
                className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0"
              />
              <div className="md:ml-4 text-center md:text-left">
                <h4 className="text-lg font-semibold text-gray-700"> Place</h4>
                <p className="text-gray-600">{projects?.place}</p>
                <h4 className="text-lg font-semibold text-gray-700 mt-3"> Overview</h4>
                <p className="text-gray-600">{projects?.overview}</p>
                <h4 className="text-lg font-semibold text-gray-700 mt-3"> Price</h4>
                <p className="text-gray-600">{projects?.price}</p>
                <h4 className="text-lg font-semibold text-gray-700 mt-3"> Rooms</h4>
                <p className="text-gray-600">{projects?.rooms}</p>
                {/* Contact Agent Section */}
                <div className="mt-6 border-t pt-4">
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Contact Agent</h4>
                  <div className="flex flex-col space-y-3">
                    <button
                      className="flex items-center justify-center bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                      onClick={handleContactAgent}
                    >
                      <FontAwesomeIcon icon={faPhone} className="mr-2" />
                      Call Agent
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer position="top-center" theme="colored" autoClose={2000} />

        </div>
      )}

    </>
  );
}

export default PropertCard;




// 
