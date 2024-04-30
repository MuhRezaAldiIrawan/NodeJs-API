const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Register User
exports.register =  async (req, res) => {
    
    try {
        const { nama, email, password } = req.body;
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({
            nama,
            email,
            password: hashedPassword,
            imageProfile: req.file.path
        });
        await newUser.save();
        res.status(201).json({ message: 'User berhasil didaftarkan', imageProfile: req.file.path });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login User
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User tidak ditemukan' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Password salah' });
        }
        const token = jwt.sign({ id: user._id }, 'rahasia', { expiresIn: '1h' });
        res.status(200).json({ user, token, message: 'Login berhasil' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mendapatkan semua user
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mendapatkan user berdasarkan ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User tidak ditemukan' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
