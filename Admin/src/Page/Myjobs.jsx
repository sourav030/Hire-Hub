import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AdminContext } from '../Context/Context';
import { Briefcase, MapPin, Building2, IndianRupee, Trash2 } from 'lucide-react';

const Myjobs = () => {
  const { job, setJob, token } = useContext(AdminContext);

  

  const handleDelete = async (jobId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/job/delete/${jobId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove deleted job from state
      const updatedJobs = job.filter((item) => item.id !== jobId);
      setJob(updatedJobs);
      alert("Job deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete job.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Posted Jobs</h2>

        {job.length === 0 ? (
          <p className="text-center text-gray-500">No jobs posted yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {job.map((item, index) => (
              <div
                key={item.id || index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 relative"
              >
                <button
                  onClick={() => handleDelete(item.id)}
                  className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                  title="Delete Job"
                >
                  <Trash2 size={20} />
                </button>

                <h3 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Briefcase className="text-blue-600" size={20} />
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-3">{item.description}</p>

                <div className="flex flex-wrap gap-4 text-gray-700 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="text-green-500" size={16} />
                    {item.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Building2 className="text-purple-500" size={16} />
                    {item.company_name}
                  </div>
                  <div className="flex items-center gap-1">
                    <IndianRupee className="text-yellow-600" size={16} />
                    {item.Salary}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Myjobs;
