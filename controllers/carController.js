// controllers/carController.js
import Car from '../models/car.js';

export const getRentalCars = async (req, res) => {
  try {
    let { year, color, steering_type, number_of_seats } = req.query;

    const filterObject = {};
    if (year) {
      filterObject.year = parseInt(year);
    }
    if (color) {
      filterObject.color = color;
    }
    if (steering_type) {
      filterObject.steering_type = steering_type;
    }
    if (number_of_seats) {
      filterObject.number_of_seats = parseInt(number_of_seats);
    }

    const rentalCars = await Car.find(
      filterObject
    ).sort({ price_per_day: 1 });
    console.log("rentalCars", rentalCars);

    return res.status(200).json({ success: true, data: rentalCars });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Error on getting rental cars" });
  }
};



export const createRentalCars = async (req, res) => {
  let { name, price_per_day, year, color, steering_type, number_of_seats } = req.body;
  try {

    if (year) {
      year = parseInt(year);
    }
    if (number_of_seats) {
      number_of_seats = parseInt(number_of_seats);
    }
    if (price_per_day) {
      price_per_day = parseInt(price_per_day);
    }
    let rentalCar = await Car.create({
      name,
      price_per_day,
      year,
      color,
      steering_type,
      number_of_seats
    });


    return res.status(200).json({ success: true, message: "rental car created" });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Error on creating rental cars" });
  }
};