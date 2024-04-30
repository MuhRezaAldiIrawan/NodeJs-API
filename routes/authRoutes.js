const express = require('express');
const router = express.Router();
const userController = require('../controllers/userContollers');
const upload = require('../helper/image_upload');

// Route untuk registrasi user
router.post('/register', upload.single('imageProfile'),userController.register);

// Route untuk login user
router.post('/login', userController.login);

// Route untuk mendapatkan semua user
router.get('/users', userController.getAllUsers);

// Route untuk mendapatkan user berdasarkan ID
router.get('/users/:id', userController.getUserById);

module.exports = router;
