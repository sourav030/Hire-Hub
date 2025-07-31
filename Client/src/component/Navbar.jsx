import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../Context/Context';

const Navbar = () => {
  const { setLogin } = useAppContext();
  const handleLogout=()=>{
    setLogin(false)
    localStorage.removeItem('token')
  }

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Spacer for left side */}
        <div className="w-24"></div>

        {/* Brand Text Centered */}
        <div className="text-2xl font-bold text-blue-600 tracking-wide">
          HireHub
        </div>

        {/* Navigation + Logout on Right */}
        <nav className="flex items-center gap-6 text-gray-700 font-medium text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                : 'hover:text-blue-500 transition-colors duration-200'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/job"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                : 'hover:text-blue-500 transition-colors duration-200'
            }
          >
            Job
          </NavLink>

          <NavLink
            to="/appliedjob"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                : 'hover:text-blue-500 transition-colors duration-200'
            }
          >
            Applied Jobs
          </NavLink>

          <NavLink
            to="/upload"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                : 'hover:text-blue-500 transition-colors duration-200'
            }
          >
            Upload Resume
          </NavLink>

          <button
            style={{padding:"10px"}}
            onClick={handleLogout}
            className="ml-2 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full text-sm transition"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
