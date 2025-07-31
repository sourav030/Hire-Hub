import React, { useState } from 'react';
import Navbar from './../component/Navbar';
import axios from 'axios';
import { useAppContext } from '../Context/Context';

const Upload = () => {
  const { token } = useAppContext();
  const [resumeLink, setResumeLink] = useState('');
  const [skills, setSkills] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:5000/api/resume/uploadResume',
        {
          resume_link: resumeLink,
          skills: skills,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage('Resume uploaded successfully!');
      setResumeLink('');
      setSkills('');
    } catch (err) {
      console.log(err);
      setMessage('Failed to upload resume');
    }
  };

  return (
    <div style={{padding:"80px"}} className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center pt-32 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Upload Resume
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Resume Link
              </label>
              <input
                type="url"
                required
                placeholder="Paste your resume drive link"
                value={resumeLink}
                onChange={(e) => setResumeLink(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Skills
              </label>
              <input
                type="text"
                required
                placeholder="E.g. React, Node.js, MongoDB"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {message && (
              <p
                className={`text-sm mb-4 ${
                  message.includes('success')
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
