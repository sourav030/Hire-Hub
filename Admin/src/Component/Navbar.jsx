import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AdminContext } from './../Context/Context';

const Navbar = () => {
  const {setToken}=useContext(AdminContext)
  const navItems = [
    { name: 'Post Job', path: '/recruiter/post-job' },
    { name: 'My Jobs', path: '/recruiter/my-jobs' },
    { name: 'Applications', path: '/recruiter/applications' },
     // You can implement logout logic here
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Recruiter Panel
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-medium border-b-2 border-blue-600 pb-1'
                  : 'text-gray-600 hover:text-blue-600 transition'
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <button onClick={()=>setToken(null)} className='cursor-pointer'>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
