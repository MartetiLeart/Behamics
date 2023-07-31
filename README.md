

```markdown
# Car Rental REST API

This is a simple REST API for a car rental service built with Node.js, Express.js, and MongoDB.

## How to Run the App

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the project root directory.
   - Add the following variables with appropriate values:

     ```
     PORT=3000
     MONGODB_URI=mongodb+srv://leart:leart@behamicsrental.2mth1gn.mongodb.net/
     JWT_SECRET_KEY=secretone
     ```

   Note: The provided `MONGODB_URI` appears to be a valid MongoDB connection string, and the `JWT_SECRET_KEY` is set to "secretone."

4. Start the server:

   ```bash
   npm start
   ```

5. The server will be running at `http://localhost:3000`.

## Endpoints

### `POST /register`

Registers a new user in the system.

Request Body:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "username": "johndoe",
  "password": "secretpassword"
}
```

Response:
```json
{
  "message": "User registered successfully."
}
```

### `POST /login`

Logs in a user and returns a JWT token for authentication.

Request Body:
```json
{
  "username": "johndoe",
  "password": "secretpassword"
}
```

Response:
```json
{
  "token": "your_generated_token"
}
```

### `GET /my-profile`

Returns the profile of the currently logged-in user.

Response:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "username": "johndoe"
}
```

### `GET /rental-cars`

Returns a list of available cars to rent, sorted from lowest to highest price.

Query Parameters (optional for filtering):
- `year`: Filter cars by year.
- `color`: Filter cars by color.
- `steering_type`: Filter cars by steering type.
- `number_of_seats`: Filter cars by number of seats.

Response:
```json
[
  {
    "_id": "60e84e45772d9c247d179ea7",
    "name": "Golf mk8",
    "price_per_day": 50.0,
    "year": 2015,
    "color": "black",
    "steering_type": "automatic",
    "number_of_seats": 5
  },
  // More cars...
]
```

## Authentication

- The `/register` and `/login` endpoints are public and do not require authentication.
- The `/my-profile` endpoint is protected and requires a valid JWT token for authentication. Include the token in the `Authorization` header as follows:
  ```
  Authorization: Bearer your_generated_token
  ```
  Replace `your_generated_token` with the token obtained from the `/login` endpoint.


