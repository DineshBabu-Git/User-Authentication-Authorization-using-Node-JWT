
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register new user
// POST /api/auth/register

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Login user
// POST /api/auth/login

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "Login successful",
            token
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get user profile
// GET /api/auth/profile

exports.getUserProfile = async (req, res) => {
    res.status(200).json({
        message: "User profile fetched successfully",
        user: req.user
    });
};
