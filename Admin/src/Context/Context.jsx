import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

// 1. Create the context
export const AdminContext = createContext();

// 2. Create the provider component
const Context = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState(null);
  const [job, setJob] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      if (!token) return; // Don't call API without token

      try {
        const res = await axios.get('http://localhost:5000/api/job/recuriterJob', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJob(res.data.job); // access correct field
      } catch (error) {
        console.error("Failed to fetch recruiter jobs:", error.response?.data || error.message);
      }
    };

    fetchJobs();
  }, ); // Runs when token is set

  return (
    <AdminContext.Provider value={{ login, setLogin, token, setToken, job, setJob }}>
      {children}
    </AdminContext.Provider>
  );
};

export default Context;
