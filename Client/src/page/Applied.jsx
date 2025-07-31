import React, { useEffect } from 'react';
import { useAppContext } from './../Context/Context';
import Navbar from './../component/Navbar';
import { Briefcase, MapPin, Building2, IndianRupee, CalendarCheck2 } from 'lucide-react';

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
      <div style={{padding:'50px'}} className="pt-28 max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Jobs in which you applied
        </h2>

        {userApplications.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            You haven’t applied to any jobs yet.
          </p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {userApplications.map((job) => (
              <div
                key={job.application_id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 mb-1">
                    <Briefcase className="text-blue-600" size={20} /> {job.title}
                  </h3>

                  <p className="text-sm flex items-center gap-1 text-gray-600 mb-1">
                    <Building2 size={16} className="text-purple-500" /> {job.company_name}
                  </p>

                  <p className="text-sm flex items-center gap-1 text-gray-600 mb-1">
                    <MapPin size={16} className="text-green-500" /> {job.location}
                  </p>

                  <p className="text-sm flex items-center gap-1 text-gray-600">
                    <IndianRupee size={16} className="text-yellow-600" /> {job.salary}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusBadge(
                      job.status
                    )}`}
                  >
                    {job.status || 'Pending'}
                  </span>

                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <CalendarCheck2 size={14} className="text-blue-400" />
                    {new Date(job.applied_at).toLocaleDateString()}
                  </span>
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
