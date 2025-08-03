import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-4 gap-8 text-sm">

        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-3">HireHub</h3>
          <p className="text-gray-600 leading-relaxed">
            Empowering careers. Connecting people. One job at a time.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="inline-block text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/job"
                className="inline-block text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 transition"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/appliedjob"
                className="inline-block text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 transition"
              >
                Applied
              </Link>
            </li>
            <li>
              <Link
                to="/upload"
                className="inline-block text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 transition"
              >
                Upload Resume
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <a
                href="mailto:hirehub@example.com"
                className="hover:text-blue-600 hover:underline underline-offset-4 transition"
              >
                souravtiwari139@gmail.com
              </a>
            </li>
            <li className="flex gap-3 mt-2">
              <a
                href="https://github.com/sourav030"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-gray-900 transition"
              >
                <div className="bg-white p-2 rounded-full shadow hover:bg-blue-100">
                  <FaGithub size={18} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/sourav-kumar-tiwari-82762426b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-800 transition"
              >
                <div className="bg-white p-2 rounded-full shadow hover:bg-blue-100">
                  <FaLinkedin size={18} />
                </div>
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Stay Updated</h4>
          <p className="mb-3 text-gray-600">Get job alerts and career tips in your inbox.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md border-2 border-[#6C63FF] focus:outline-none focus:ring-2 focus:ring-[#6C63FF] text-sm w-full"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-10 px-6">
        © {new Date().getFullYear()} HireHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
