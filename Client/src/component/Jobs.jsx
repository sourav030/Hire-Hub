import React, { useState } from 'react';
import axios from 'axios';
import { useAppContext } from './../Context/Context';

const Jobs = ({ id, title, description, location, company_name, salary }) => {
  const { token } = useAppContext();
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const apply = async () => {
    if (!token) {
      setMessage("Please login to apply.");
      setIsError(true);
      return;
    }

    try {
      const res = await axios.post(
        'http://localhost:5000/api/job/apply',
        { job_id: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      setMessage(res.data.message);
      setIsError(false);
    } catch (err) {
      setMessage("You have already applied.");
      setIsError(true);
    }
  };

  return (
    <div className="bg-white p-4 rounded-md flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-sm text-gray-600">{company_name}</span>
      </div>

      <p className="text-gray-700 text-sm">{description}</p>

      <div className="text-sm text-gray-600 flex flex-col gap-1">
        <span><strong>Salary:</strong> ₹{salary}</span>
        <span><strong>Location:</strong> {location}</span>
      </div>

      <button
        onClick={apply}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm w-fit"
      >
        Apply
      </button>

      {message && (
        <div className={`text-sm mt-2 ${isError ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Jobs;
