import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // ✅ Add this
import 'react-toastify/dist/ReactToastify.css';   // ✅ And this
import { useAppContext } from './Context/Context';

import Home from './page/Home';
import Job from './page/Job';
import Upload from './page/Upload';
import ApplidJob from './page/Applied';
import Login from './page/Login';

function App() {
  const { login } = useAppContext();
  const notify = () => toast("Wow so easy!");


  return (
    <>
      <Routes>
        {!login ? (
          <Route path="*" element={<Login />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/job" element={<Job />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/appliedjob" element={<ApplidJob />} />
          </>
        )}
      </Routes>

      {/* ✅ ToastContainer added below */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
