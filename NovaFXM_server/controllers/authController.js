// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'yoursecretkey';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function generateToken(user) {
  return jwt.sign(
    { id: user._id, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

// Return only safe fields (never expose hashed password)
function safeUser(user) {
  return {
    id:        user._id,
    firstName: user.firstName,
    lastName:  user.lastName,
    email:     user.email,
    country:   user.country,
    phone:     user.phone,
    role:      user.role,
    createdAt: user.createdAt,
  };
}

// ─── Register ─────────────────────────────────────────────────────────────────

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, country, phone, role } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    const exists = await User.findOne({ email: email.toLowerCase() });
    if (exists) return res.status(400).json({ message: 'Email already registered.' });

    const user = new User({ firstName, lastName, email, password, country, phone, role });
    await user.save();

    const token = generateToken(user);
    res.status(201).json({ user: safeUser(user), token });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ─── Login ────────────────────────────────────────────────────────────────────

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(400).json({ message: 'Invalid credentials.' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials.' });

    const token = generateToken(user);
    res.json({ user: safeUser(user), token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ─── Get own profile (protected) ─────────────────────────────────────────────

exports.getProfile = async (req, res) => {
  try {
    // req.user is set by the auth middleware (contains id & role from JWT)
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found.' });
    res.json({ user: safeUser(user) });
  } catch (err) {
    console.error('Profile error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ─── Admin-only example ──────────────────────────────────────────────────────

exports.adminOnly = (req, res) => {
  res.json({ message: 'Welcome, admin!' });
};