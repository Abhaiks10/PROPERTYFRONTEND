import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getHomeProjectAPI } from '../services/allApi';
import PropertCard from '../components/PropertCard';
function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [homeProjects, setHomeProjects] = useState([]);

  const getHomeProjects = async () => {
    const result = await getHomeProjectAPI();
    setHomeProjects(result.data);
  };

  useEffect(() => {
    getHomeProjects()
    if (sessionStorage.getItem("token")) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])

  return (
    <>
      <section className="bg-slate-100 min-h-[50vh] flex items-center px-6 sm:px-16 ml-[150px]">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-800">
            Find your next <span className="text-slate-600">Perfect</span> place with ease
          </h1>
          <p className="text-slate-500 mt-4 text-sm sm:text-base">
            EstateEase is the best place to find your next perfect place to live.
            We have a wide range of properties for you to choose from.
          </p>
          <Link to={'/login'} className="text-blue-600 font-semibold mt-6 inline-block hover:underline">
            Let’s get started...
          </Link>
        </div>
      </section>

      <section className="bg-slate-100  items-center px-6 sm:px-16 ml-[150px]">
      <h1 className="text-2xl font-semibold">Recent Places Sales</h1>
      <Link to={'/login'} className="text-blue-600 hover:underline block ">
        Show more places for sale
      </Link>
      </section>
      <div className="text-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-6 sm:px-16">
          {homeProjects?.map((item, index) => (
            <PropertCard  key={index} projects={item} />
          ))}
        </div>

      </div>
    </>
  );
}

export default Home;