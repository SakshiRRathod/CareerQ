const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User already exists, you can login', success: false });
        }

        const newUser = new UserModel({ name, email, password });
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();

        res.status(201).json({
            message: "Signup successful",
            success: true
        });
    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required", success: false });
        }

        console.log('Login attempt for:', email);

        const user = await UserModel.findOne({ email });
        console.log('User found:', user ? 'Yes' : 'No');

        const errorMsg = 'Auth failed: email or password is incorrect';

        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET is not defined in environment variables');
            return res.status(500).json({
                message: "Server configuration error",
                success: false
            });

        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        console.log('JWT_SECRET:', process.env.JWT_SECRET);  // For debugging



        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (err) {
        console.error("Login Error:", err);
        let errorMessage = "Internal server error";
        if (err.name === 'ValidationError') {
            errorMessage = "Invalid input data";
        } else if (err.name === 'MongoError' && err.code === 11000) {
            errorMessage = "Duplicate key error";
        }
        res.status(500).json({
            message: errorMessage,
            success: false
        });
    }
};


module.exports = {
    signup,
    login
};
