import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiLogOut } from "react-icons/fi";
import { useAppContext } from "../Context/Context";

const Navbar = () => {
  const { setLogin } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setLogin(false);
    localStorage.removeItem("token");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/job" },
    { name: "Applied Jobs", path: "/appliedjob" },
    { name: "Upload Resume", path: "/upload" },
  ];

  return (
    <header className="bg-white backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-blue-600">HireHub</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-500 transition-colors"
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full text-sm shadow transition"
          >
            <FiLogOut /> Logout
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden transition-all duration-300 bg-white shadow-md px-6 pt-2 pb-4 space-y-3 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block text-blue-600 font-semibold"
                : "block text-gray-700 hover:text-blue-600"
            }
          >
            {link.name}
          </NavLink>
        ))}
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-full text-sm transition"
        >
          <FiLogOut className="mr-2" /> Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
