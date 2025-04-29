
import React, { useContext, useEffect, useState } from 'react'
import { FaUsers, FaChartPie, FaHome, FaCog, FaBars } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { loginResponseContext } from '../context/ContextShare';
const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {setLoginResponse} = useContext(loginResponseContext)
  const [token, setToken] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  })

  const handleLogout=()=>{
    alert(`Logged out succesfully`)
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setLoginResponse(false)
    navigate('/')
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
        <h1 className="text-2xl font-semibold text-center">Admin Panel</h1>
        <nav>
          <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><FaChartPie className="inline mr-2" /> Dashboard</Link>

        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-white shadow-md p-4 flex justify-between items-center">
          <button className="text-gray-700 md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars size={24} />
          </button>
          <h2 className="text-xl font-semibold">Admin Dashboard</h2>
          {token && <button onClick={handleLogout}  className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>}
        </div>

        {/* Dashboard Content */}


        
        
      </div>
    </div>
  );
};

export default AdminDashboard;
