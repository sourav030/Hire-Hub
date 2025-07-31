import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminContext } from './Context/Context';

import Login from './Page/Login';
import Navbar from './Component/Navbar';
import PostJob from './Page/PostJob';
import Myjobs from './Page/Myjobs';
import Applications from './Page/Applications';

const App = () => {
  const { token } = useContext(AdminContext);

  return (
    <>
      {token && <Navbar />}
      <Routes>
        {!token ? (
          <Route path="*" element={<Login />} />
        ) : (
          <>
            <Route path="/recruiter/post-job" element={<PostJob />} />
            <Route path="/recruiter/my-jobs" element={<Myjobs />} />
            <Route path="/recruiter/applications" element={<Applications />} />
            <Route path="*" element={<PostJob />} /> {/* default redirect after login */}
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
