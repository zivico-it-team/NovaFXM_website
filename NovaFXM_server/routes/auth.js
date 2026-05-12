// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { auth, isAdmin } = require('../middleware/auth');

// Public routes
router.post('/register', authController.register);
router.post('/login',    authController.login);

// Protected routes (any logged-in user)
router.get('/profile', auth, authController.getProfile);

// Admin-only route
router.get('/admin', auth, isAdmin, authController.adminOnly);

module.exports = router;