
import jwt from 'jsonwebtoken';
const jwtSecretKey = process.env.JWT_SECRET_KEY || 'mysecretkey';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log("authHeader", authHeader);
  const token = authHeader && authHeader.split(' ')[1];
  console.log("token", token);

  if (!token) {
    return res.status(401).json({ message: 'Authentication token missing.' });
  }

  jwt.verify(token, jwtSecretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }

    req.user = user;
    next();
  });
};
