import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const jwtSecretKey = process.env.JWT_SECRET_KEY || 'mysecretkey';

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, username, password } = req.body;

    if (!fullName || !email || !username || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(409).json({ message: 'Email or username already exists.' });
    }
    const newUser = await User.create({
      fullName,
      email,
      username,
      password,
    });

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user with the provided username
    const user = await User.findOne({ username });

    // Check if the user exists and verify the password
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Create and sign the JWT token
    const token = jwt.sign({ username: user.username }, jwtSecretKey);

    return res.status(200).json({ success: true, token: `Bearer ${token}` });
  } catch (error) {
    console.error('Error logging in user:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getMyProfile = async (req, res) => {
  try {

    const user = await User.findOne({ username: req.user.username }, '-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
