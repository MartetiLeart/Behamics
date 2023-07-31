// index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import carRouter from './routers/carRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB successfully!');
    app.use(express.json());
    app.use("/api/v1/users", userRouter);
    app.use("/api/v1/cars", carRouter);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
