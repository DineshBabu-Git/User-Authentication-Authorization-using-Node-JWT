
# User Authentication and Authorization with Bearer Token

A beginner-friendly Node.js project implementing User Authentication and Authorization using JWT Bearer tokens.

-----------------------------------------------------------------------------------

## Features

- User Registration
- User Login
- Password Hashing
- JWT Authentication
- Protected Routes
- MVC Architecture

-----------------------------------------------------------------------------------

## Tech Stack Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT
- Postman

-----------------------------------------------------------------------------------

## Installation Setup

1. Copy files into a folder, or clone repository
2. Install dependencies: npm install
3. Set environment variables
4. Run: npm run dev

-----------------------------------------------------------------------------------

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
MONGO_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_secret_key
PORT=5000
```

-----------------------------------------------------------------------------------

## API Endpoints

Base URL: `http://localhost:5000/api/auth`

- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Login user and get JWT token
- **GET /api/auth/profile** - Get user profile (Protected Route)

-----------------------------------------------------------------------------------

## Sample request / response examples

- **Register User**

  - Request:
    ```
    POST /api/auth/register
    Content-Type: application/json

    {
      "username": "testuser",
      "email": "testuser@email.com",
      "password": "testpassword123"
    }
    ```
  - Response:
    ```
    {
      "success": true,
      "data": {
        "_id": "64f...",
        "username": "testuser",
        "email": "testuser@email.com",
        "__v": 0
      }
    }
    ```
    
- **Login User**

  - Request:
    ```
    POST /api/auth/login
    Content-Type: application/json

    {
      "email": "testuser@email.com",
      "password": "testpassword123"
    }
    ```
  - Response:
    ```
    {
      "success": true,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

- **Get User Profile (Protected Route)**

  - Request:
    ```
    GET /api/auth/profile
    Authorization: Bearer <your_jwt_token>
    ```
  - Response:
    ```
    {
      "success": true,
      "data": {
        "_id": "64f...",
        "username": "testuser",
        "email": "testuser@email.com",
        "__v": 0
      }
    }
    ```

-------------------------------------------------------------------------------------

## License

This project is open-source and free to use for educational and personal projects.

-----------------------------------------------------------------------------------
