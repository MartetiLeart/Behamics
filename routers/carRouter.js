import express from "express";
const router = express.Router();
import { getRentalCars, createRentalCars } from '../controllers/carController.js';


router.get('/rental-cars', getRentalCars);
router.post('/rental-cars', createRentalCars);


export default router;