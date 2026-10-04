# Car Rental REST API

A car rental API built with Node.js, Express.js, and MongoDB.

## Run locally

1. Clone this repository.
2. Run `npm install`.
3. Create a local `.env` file with your own configuration:

```dotenv
PORT=3000
MONGODB_URI=mongodb://localhost:27017/car_rental
JWT_SECRET_KEY=replace_with_a_long_random_secret
```

Use a unique, randomly generated JWT secret. Keep credentials out of source control. If credentials previously published in this repository were real, rotate them; replacing examples does not remove earlier commits.

4. Run `npm start`.
5. The API listens at `http://localhost:3000` by default.

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| POST | `/register` | Register with `fullName`, `email`, `username`, and `password`. |
| POST | `/login` | Authenticate with `username` and `password`; receive a JWT. |
| GET | `/my-profile` | Retrieve the authenticated user's profile. |
| GET | `/rental-cars` | List cars ordered by price; optionally filter by `year`, `color`, `steering_type`, and `number_of_seats`. |

Protected requests use the header `Authorization: Bearer <your_token>`.
