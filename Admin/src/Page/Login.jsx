import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AdminContext } from '../Context/Context';

const Login = () => {
  const [signup, setSignup] = useState(false);
  const {token, setToken}=useContext(AdminContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const toggleForm = () => {
    setSignup(!signup);
    setFormData({ name: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: formData.email,
      password: formData.password,
      role: 'recruiter', // 👈 always send recruiter role
    };

    if (signup) {
      payload.name = formData.name;
    }

    const apiUrl = signup
      ? 'http://localhost:5000/api/auth/signup'
      : 'http://localhost:5000/api/auth/login';

    try {
      const res = await axios.post(apiUrl, payload);

      console.log('Response:', res.data);
      setToken(res.data.token)
      localStorage.setItem('token',res.data.token)
      setSignup(!signup)
      alert(`${signup ? 'Signup' : 'Login'} successful!`);
      setFormData({ name: '', email: '', password: '' });

      // You can also store token here if returned:
      // localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.error('API Error:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white border border-gray-200 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center">
          {signup ? 'Sign Up' : 'Log In'}
        </h1>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {signup && (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
          >
            {signup ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          {signup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            onClick={toggleForm}
            className="text-blue-600 hover:underline"
          >
            {signup ? 'Log In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
