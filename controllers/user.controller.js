const User = require("../models/user.model");
const subscriber = require("../models/subscriber.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// register

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        const Newemail = await subscriber({ email });
        await Newemail.save();
        await newUser.save();
        res.status(200).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// login

const login = async (req, res) => {
    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.status(200).cookie('token', token, { httpOnly: true , sameSite: 'strict', maxage: 60 * 60 * 24 }).json({ success: true, message: 'User logged in successfully' });


        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// logout

const logout = (req, res) => {
    res.clearCookie('token', { path: '/' });
    res.status(200).json({ success: true, message: 'User logged out successfully' });
}; 

module.exports = {
    register,
    login,
    logout
};