import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [allJobs, setAllJobs] = useState([]);
  const [token, setToken] = useState(null);
  const [userApplications, setUserApplications] = useState([]); // ✅

  
  const fetchAllJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/job/getalljob");
      setAllJobs(res.data.jobs || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };



  const fetchUserApplications = async () => {
    if (!token) return;

    try {
      const res = await axios.get("http://localhost:5000/api/job/userApplication", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserApplications(res.data.applications);
      
    } catch (err) {
      console.error("Error fetching user applications:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  useEffect(() => {
    const t = localStorage.getItem('token');
    if (t) {
      setToken(t);
      setLogin(true); // ✅ update login state
    }
  }, []); // ✅ run only once on mount


  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        login,
        setLogin,
        allJobs,
        fetchAllJobs,
        userApplications, // ✅ exposed to components
        fetchUserApplications, // ✅ exposed to components
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
