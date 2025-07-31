const db = require('../utils.js/db');

const createResume = async (req, res) => {
  const { resume_link, skills } = req.body;
  const userId = req.user.id;

  try {
    // Get user's name
    const [nameResult] = await db.query(
      'SELECT name FROM users WHERE id = ?', [userId]
    );

    if (!nameResult || nameResult.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const username = nameResult[0].name;

    // Check if resume already exists
    const [existingResume] = await db.query(
      'SELECT user_id FROM resumes WHERE user_id = ?', [userId]
    );

    if (existingResume.length > 0) {
      // Delete existing resume
      await db.query('DELETE FROM resumes WHERE user_id = ?', [userId]);
    }

    // Insert new resume
    const [result] = await db.query(
      'INSERT INTO resumes (user_id, username, resume_link, skills) VALUES (?, ?, ?, ?)',
      [userId, username, resume_link, skills]
    );

    return res.status(200).json({
      message: 'Resume uploaded successfully',
      resumeId: result.insertId,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server-side error' });
  }
};

module.exports = { createResume };
