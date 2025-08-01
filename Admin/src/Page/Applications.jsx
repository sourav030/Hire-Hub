import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AdminContext } from '../Context/Context';

const Applications = () => {
  const { application,token } = useContext(AdminContext);
  const [statusMap, setStatusMap] = useState({});
  const [message, setMessage] = useState(null);

  const handleStatusChange = (id, value) => {
    setStatusMap((prev) => ({ ...prev, [id]: value }));
  };

  const updateStatus = async (application_id) => {
    const stat = statusMap[application_id];
    if (!stat) return;

    try {
      const res = await axios.post('http://localhost:5000/api/job/updateStatus', {
        application_id,
        stat,
      }, {
        headers: {
          'Content-Type': 'application/json',
          // Add token if needed:
           Authorization: `Bearer ${token}`
        }
      });
      console.log(res)
      setMessage({ type: 'success', text: res.data.message });
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to update status' });
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Job Applications</h2>

      {message && (
        <div className={`mb-4 p-2 rounded text-sm ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message.text}
        </div>
      )}

      {application?.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <div className="grid grid-cols-7 gap-4 bg-gray-200 p-4 font-semibold text-gray-700 text-sm">
            <div>Name</div>
            <div>Email</div>
            <div>Job Title</div>
            <div>Company</div>
            <div>Status</div>
            <div>Resume</div>
            <div>Action</div>
          </div>

          {application.map((app) => (
            <div
              key={app.application_id}
              className="grid grid-cols-7 gap-4 p-4 border-b hover:bg-gray-50 text-sm items-center"
            >
              <div className="font-medium">{app.applicant_name}</div>
              <div className="text-gray-600">{app.email}</div>
              <div>{app.job_title}</div>
              <div>{app.company_name}</div>
              <div>
                <select
                  value={statusMap[app.application_id] || app.status}
                  onChange={(e) => handleStatusChange(app.application_id, e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value="pending">Pending</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
              <div>
                <a
                  href={app.resume_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View
                </a>
              </div>
              <div>
                <button
                  onClick={() => updateStatus(app.application_id)}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700"
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Applications;
