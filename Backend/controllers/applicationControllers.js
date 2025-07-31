const db = require('../utils.js/db');

const createApplication = async (req, res) => {
    const { job_id } = req.body;
    const userId = req.user.id;

    try {
        const [resumeRow] = await db.query(
            'SELECT content_id FROM resumes WHERE user_id = ?', [userId]
        );

        if (resumeRow.length === 0) {
            return res.status(400).json({
                message: "Please upload your resume before applying for a job."
            });
        }

        const resumeId = resumeRow[0].content_id;

        const [alreadyApplied] = await db.query(
            'SELECT id FROM applications WHERE user_id = ? AND job_id = ?',
            [userId, job_id]
        );

        if (alreadyApplied.length > 0) {
            return res.status(409).json({
                message: "You have already applied to this job."
            });
        }

        const [result] = await db.query(
            'INSERT INTO applications (user_id, job_id, resume_id) VALUES (?, ?, ?)',
            [userId, job_id, resumeId]
        );

        return res.status(200).json({
            message: 'Applied successfully!',
            applicationId: result.insertId
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Side Error" });
    }
};

const getApplicationsForRecruiter = async (req, res) => {
    const recruiterId = req.user.id;

    try {
        const [applications] = await db.query(`
            SELECT 
                applications.id AS application_id,
                users.name AS applicant_name,
                users.email,
                jobs.title AS job_title,
                jobs.company_name,
                resumes.resume_link
            FROM applications
            JOIN jobs ON applications.job_id = jobs.id
            JOIN users ON applications.user_id = users.id
            JOIN resumes ON applications.resume_id = resumes.content_id
            WHERE jobs.recruiter_id = ?;
        `, [recruiterId]);

        return res.status(200).json({ applications });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
};

const getUserApplication = async (req, res) => {
  const userId = req.user.id;

  try {
    const [rows] = await db.query(
      `SELECT 
         a.id AS application_id,
         a.applied_at,
         a.status,
         j.id AS job_id,
         j.title,
         j.description,
         j.location,
         j.company_name,
         j.salary
       FROM applications a
       JOIN jobs j ON a.job_id = j.id
       WHERE a.user_id = ?
       ORDER BY a.applied_at DESC`,
      [userId]
    );

    res.status(200).json({ applications: rows });
  } catch (err) {
    console.error("MySQL error in getUserApplication:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};





module.exports = { createApplication ,getApplicationsForRecruiter,getUserApplication};
