import React, { useEffect } from 'react';
import Navbar from './../component/Navbar';
import Jobs from './../component/Jobs';
import { useAppContext } from '../Context/Context';

const Job = () => {
  const { allJobs, fetchAllJobs } = useAppContext();

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-24 px-4 bg-gray-50 min-h-screen">
        <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
          Job Listings
        </h2>

        {allJobs.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">Loading jobs...</p>
        ) : (
          <div style={{padding:"40px"}} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {allJobs.map((job, index) => (
              <Jobs
                key={index}
                id={job.id}
                title={job.title}
                description={job.description}
                location={job.location}
                company_name={job.company_name}
                salary={job.salary}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Job;
