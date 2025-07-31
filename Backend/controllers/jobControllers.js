const db = require('../utils.js/db');

const createJob = async (req, res) => {
    const role = req.user.role;

    const { title, description, location, company_name, salary } = req.body;
    const recruiterId = req.user.id; // Take recruiter_id from token

    // Only recruiter can create job
    if (role !== 'recruiter') {
        return res.status(403).json({ message: 'You are not authorized to create a job.' });
    }

    try {
        await db.query(
            'INSERT INTO Jobs (recruiter_id, title, description, location, company_name, Salary) VALUES (?, ?, ?, ?, ?, ?)',
            [recruiterId, title, description, location, company_name, salary]
        );

        res.status(201).json({ message: "Job created successfully" });
    } catch (err) {
        console.error("Job Creation Error:", err);
        res.status(500).json({ message: 'Server error while creating job.' });
    }
};





const getAllJob = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    try {
        const [getjob] = await db.query(
            'SELECT id, title, description, location, company_name, salary FROM Jobs LIMIT ? OFFSET ?',
            [limit, offset]
        );

        res.status(200).json({
            message: "Jobs fetched successfully",
            page,
            limit,
            jobs: getjob
        });
    } catch (err) {
        console.error("Get All Job Error:", err);
        res.status(500).json({ message: 'Server side error' });
    }
};


const getJobTitle = async (req, res) => {
    const { title } = req.body;
    try {
        const [getjob] = await db.query(
            `SELECT title, description, location, company_name 
             FROM Jobs 
             WHERE title LIKE ?`,
            [`%${title}%`]  // This enables partial match
        );

        res.status(200).json({
            message: "Matching jobs fetched successfully",
            jobs: getjob
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server side error' });
    }
};

const getRecuriterJob=async(req,res)=>{
    const userId=req.user.id;
    try{
        const [job]= await db.query(
            'select * from jobs where recruiter_id=? ',[userId]
        )
        res.status(200).json({
            message:"Get a job successfuly",
            job
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Server side error"
        })
    }
}

const deleteJob = async (req, res) => {
    const job_id = req.params.job_id; // take job_id from URL
    const userId = req.user.id;

    try {
        const [jobData] = await db.query(
            'SELECT * FROM Jobs WHERE id = ?',
            [job_id]
        );

        if (jobData.length === 0) {
            return res.status(404).json({ message: "Job not found" });
        }

        const job = jobData[0];

        if (job.recruiter_id !== userId) {
            return res.status(403).json({ message: "You are not allowed to delete this job" });
        }

        await db.query(
            'DELETE FROM Jobs WHERE id = ?',
            [job_id]
        );

        res.status(200).json({ message: "Job deleted successfully" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server side error" });
    }
};


module.exports = { createJob, getAllJob, getJobTitle,getRecuriterJob,deleteJob }
