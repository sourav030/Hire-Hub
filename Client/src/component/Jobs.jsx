import React, { useState } from 'react';
import axios from 'axios';
import { useAppContext } from './../Context/Context';

const Jobs = ({ id, title, description, location, company_name, salary }) => {
    const { token } = useAppContext();
    const [message, setMessage] = useState(null); // ✅ message state
    const [isError, setIsError] = useState(false); // ✅ to set color

    const apply = async () => {
        console.log("== APPLY CALLED ==");
        console.log("Token:", token);
        console.log("Job ID:", id);

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

            console.log("Apply success", res.data);
            setMessage("Successfully applied to the job!");
            setIsError(false);
        } catch (err) {
            console.error("Apply error:", err.response?.data || err.message);
            setMessage("you already apply ");
            setIsError(true);
        }
    };

    return (
        <div className='shadow-2xl flex flex-col w-[500px] p-6 rounded-lg border bg-white gap-4'>
            <div className='flex justify-between'>
                <div className='text-xl font-semibold text-gray-800'>{title}</div>
                <div className='text-gray-600'>{company_name}</div>
            </div>

            <div className='text-gray-700'>
                {description}
            </div>

            <div className='flex gap-6 text-gray-600'>
                <div><span className='font-medium'>Salary:</span> ₹{salary}</div>
                <div><span className='font-medium'>Location:</span> {location}</div>
            </div>

            <button
                onClick={apply}
                className='mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700'>
                Apply
            </button>

            {/* ✅ Show message below */}
            {message && (
                <div className={`mt-4 text-sm ${isError ? 'text-red-600' : 'text-green-600'}`}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default Jobs;
