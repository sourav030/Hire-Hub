import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AdminContext } from '../Context/Context';

const PostJob = () => {
  const { token } = useContext(AdminContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    company_name: '',
    salary: '', // Added salary field
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:5000/api/job/createjob',
        {
          title: formData.title,
          description: formData.description,
          location: formData.location,
          company_name: formData.company_name,
          salary: parseInt(formData.salary, 10), // Convert to integer
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Job posted:', res.data);
      alert('Job posted successfully!');
      setFormData({
        title: '',
        description: '',
        location: '',
        company_name: '',
        salary: '',
      });
    } catch (error) {
      console.error('Error posting job:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Failed to post job');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Post a Job</h2>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Job Title"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <input
          type="text"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          placeholder="Company Name"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          placeholder="Salary"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Job Description"
          required
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
