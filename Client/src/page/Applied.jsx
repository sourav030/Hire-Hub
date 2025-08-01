import React, { useEffect } from 'react';
import { useAppContext } from './../Context/Context';
import Navbar from './../component/Navbar';
import { CalendarCheck2 } from 'lucide-react';

const Applied = () => {
  const { userApplications, fetchUserApplications } = useAppContext();

  useEffect(() => {
    fetchUserApplications();
  }, []);

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'accepted':
        return 'bg-green-100 text-green-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      case 'pending':
      default:
        return 'bg-yellow-100 text-yellow-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Centered Container */}
      <div className="flex flex-col justify-center pt-28 max-w-6xl mx-auto px-4 sm:px-8 w-full pb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Jobs You Applied For
        </h2>

        {userApplications.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            You haven’t applied to any jobs yet.
          </p>
        ) : (
          <div className="bg-white rounded-xl shadow overflow-x-auto w-full">
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 bg-gray-200 px-4 py-3 font-semibold text-gray-700 text-sm">
              <div>Job Title</div>
              <div>Company</div>
              <div>Location</div>
              <div>Salary</div>
              <div>Status</div>
              <div>Applied On</div>
            </div>

            {/* Table Rows */}
            {userApplications.map((job) => (
              <div
                key={job.application_id}
                className="grid grid-cols-6 gap-4 px-4 py-5 border-b hover:bg-gray-50 text-sm items-center"
              >
                <div className="text-gray-800 font-medium">{job.title}</div>
                <div className="text-gray-600">{job.company_name}</div>
                <div className="text-gray-600">{job.location}</div>
                <div className="text-gray-600">₹ {job.salary}</div>
                <div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusBadge(job.status)}`}>
                    {job.status || 'Pending'}
                  </span>
                </div>
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <CalendarCheck2 size={14} className="text-blue-400" />
                  {new Date(job.applied_at).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Applied;
