import express from "express";
import { getMyProfile, loginUser, registerUser } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/my-profile', authenticateToken, getMyProfile);


export default router;