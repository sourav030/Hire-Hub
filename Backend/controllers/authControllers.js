const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../utils.js/db'); // Adjust path if needed

// Signup Controller
const signup = async (req, res) => {
    const { name, email, password, role } = req.body;
   

    try {
        const [existingUser] = await db.query(
            'SELECT * FROM users WHERE email = ?', [email]
        );

        if (existingUser.length > 0) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

       const users= await db.query(
            'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
            [name, email, hashedPassword, role]
        );

        return res.status(201).json({ message: 'User registered successfully',users });
    } catch (err) {
        console.error('Signup Error:', err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Login Controller
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [rows] = await db.query(
            'SELECT * FROM users WHERE email = ?', [email]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: "User is not registered" });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Password is incorrect" });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email,role:user.role },
            process.env.JWT_SECRET || "default_secret", // Use fallback if env not set
            { expiresIn: '7d' }
        );

        return res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        console.error('Login Error:', err);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { signup, login };
