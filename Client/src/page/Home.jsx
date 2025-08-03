import React from "react";
import Navbar from "./../component/Navbar";
import Footer from "./../component/Footer";
import { Link } from "react-router-dom";
import HomgeBg from "../assets/HomeBackground.jpg";
import { FaBriefcase, FaUserTie, FaBuilding, FaCode, FaPaintBrush, FaChartLine } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <img
          src={HomgeBg}
          alt="Banner"
          className="w-full min-h-[300px] max-h-[700px] object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
            <span className="px-3 py-2 rounded-lg">Discover Your Dream Job Today</span>
          </h1>
          <p className="max-w-xl mb-6 text-lg text-white/90">
            Join thousands of professionals exploring careers in tech, business,
            design and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/job"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white text-sm font-semibold shadow-md transition"
            >
              Browse Jobs
            </Link>
            <Link
              to="/upload"
              className="bg-white hover:bg-gray-200 px-6 py-3 rounded-full text-sm font-semibold shadow-md transition"
            >
              <span className="text-black">Upload Resume</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Engagement Stats */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-800">
          Why HireHub?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto text-gray-700">
          <div className="flex flex-col items-center shadow-lg p-10">
            <FaUserTie size={40} className="text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold">50K+ Job Seekers</h3>
            <p className="text-sm mt-1">
              Actively searching and applying daily
            </p>
          </div>
          <div className="flex flex-col items-center shadow-lg p-10">
            <FaBriefcase size={40} className="text-purple-600 mb-2" />
            <h3 className="text-xl font-semibold">10K+ Job Listings</h3>
            <p className="text-sm mt-1">
              Updated in real-time across industries
            </p>
          </div>
          <div className="flex flex-col items-center shadow-lg p-10">
            <FaBuilding size={40} className="text-green-600 mb-2" />
            <h3 className="text-xl font-semibold">2K+ Companies</h3>
            <p className="text-sm mt-1">Hiring through HireHub every month</p>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-800">
          Explore Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaCode size={32} className="text-blue-600 mb-3 mx-auto" />
            <h3 className="font-semibold text-lg">Software Development</h3>
            <p className="text-sm text-gray-600 mt-2">
              Backend, Frontend, Full-stack, and DevOps
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaPaintBrush size={32} className="text-pink-500 mb-3 mx-auto" />
            <h3 className="font-semibold text-lg">Design & UX</h3>
            <p className="text-sm text-gray-600 mt-2">
              UI/UX, Product Design, and Graphic Design
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaChartLine size={32} className="text-green-500 mb-3 mx-auto" />
            <h3 className="font-semibold text-lg">Marketing & Growth</h3>
            <p className="text-sm text-gray-600 mt-2">
              Digital Marketing, SEO, and Analytics
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-600 py-14 text-white text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to take the next step?</h2>
        <p className="mb-6 text-sm sm:text-base max-w-2xl mx-auto">
          Start applying or showcase your talent. Let top companies discover you today.
        </p>
        <Link
          to="/upload"
          className="bg-white hover:bg-gray-200 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold shadow transition"
        >
          <span className="text-black">Upload Your Resume</span>
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default Home;
