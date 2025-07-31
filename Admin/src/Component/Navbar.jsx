import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AdminContext } from './../Context/Context';

const Navbar = () => {
  const { setToken, setLogin } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);         // clear context
    setLogin(false);        // update login status
    navigate('/login');     // redirect to login
  };

  const navItems = [
    { name: 'Post Job', path: '/recruiter/post-job' },
    { name: 'My Jobs', path: '/recruiter/my-jobs' },
    { name: 'Applications', path: '/recruiter/applications' },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Recruiter Panel
        </Link>

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

        <button
          onClick={handleLogout}
          className="cursor-pointer text-red-600 font-medium hover:underline"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
