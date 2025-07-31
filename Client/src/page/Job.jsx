import React from 'react';
import Navbar from './../component/Navbar';
import Jobs from './../component/Jobs';
import { useAppContext } from '../Context/Context';

const Job = () => {
  const { allJobs } = useAppContext();
  console.log(allJobs)
  return (
    <>
      <Navbar />
      
      <div style={{ paddingTop: '100px' }} className='pt-24 flex flex-wrap gap-6 justify-center' >
        {allJobs.length === 0 ? (
          <p className='text-center text-gray-600'>Loading jobs...</p>
        ) : (
          allJobs.map((job, index) => (
            <Jobs
              key={index}
              id={job.id}
              title={job.title}
              description={job.description}
              location={job.location}
              company_name={job.company_name}
              salary={job.salary}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Job;
