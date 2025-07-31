import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-20 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">

        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-bold text-blue-600 mb-2">HireHub</h3>
          <p className="text-gray-600">
            Empowering job seekers and recruiters with seamless hiring solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/job" className="hover:text-blue-600">Jobs</Link></li>
            <li><Link to="/appliedjob" className="hover:text-blue-600">Applied Jobs</Link></li>
            <li><Link to="/upload" className="hover:text-blue-600">Upload Resume</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <a href="mailto:hirehub@example.com" className="hover:text-blue-600">hirehub@example.com</a>
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-gray-800" />
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-blue-700" />
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} HireHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
