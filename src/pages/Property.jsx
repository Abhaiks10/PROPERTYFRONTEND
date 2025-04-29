import React, { useEffect, useState } from 'react';
import PropertCard from '../components/PropertCard';
import { getAllProjectsAPI } from '../services/allApi';

const Property = () => {
  const [token, setToken] = useState("");
  const [allProjects, setAllProjects] = useState([]);
  const [originalProjects, setOriginalProjects] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("latest");

  const getAllProjects = async () => {
    if (sessionStorage.getItem("token")) {
      setLoading(true);
      setError(null);
      try {
        const tokenValue = sessionStorage.getItem("token");
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${tokenValue}`
        };
        const result = await getAllProjectsAPI(searchKey, reqHeader);
        if (result.data) {
          setAllProjects(result.data);
          setOriginalProjects(result.data); // Store original data for sorting
        }
      } catch (err) {
        setError("Failed to fetch projects");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSort = (option) => {
    setSortOption(option);
    let sortedProjects = [...allProjects];
    
    switch (option) {
      case "price-high-low":
        sortedProjects.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case "price-low-high":
        sortedProjects.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      default:
        // Reset to original order (no sorting)
        sortedProjects = [...originalProjects];
    }
    
    setAllProjects(sortedProjects);
  };

  useEffect(() => {
    getAllProjects();
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
  }, [searchKey]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <div className="bg-white p-6 rounded-xl shadow-md md:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Search Term:</h2>
          <input 
            onChange={(e) => setSearchKey(e.target.value)}
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded-md mb-4"
            value={searchKey}
          />
          
          <h2 className="text-lg font-semibold mb-4">Sort:</h2>
          <select 
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="w-full p-2 border rounded-md mb-4"
          >
            <option value="price-high-low">Price high to low</option>
            <option value="price-low-high">Price low to high</option>
          </select>
        </div>

        {/* Property Cards */}
        {token ? (
          <div className="md:col-span-3">
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : error ? (
              <div className="text-red-500 text-center">{error}</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProjects?.map((item) => (
                  <PropertCard key={item.id} projects={item} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <h1 className='text-danger text-center'>Please Login to See more Property</h1>
        )}
      </div>
    </div>
  );
};

export default Property;