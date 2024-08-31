# Fullstack Signup Application

## Overview

This project is a fullstack signup application built with React for the frontend and Node.js/Express with PostgreSQL for the backend. It includes a multi-step signup form that allows users to enter their information, upload a resume, and specify their skills.

## Features

- **Frontend:**
  - Multi-step signup form built with React and Material-UI.
  - Form steps include user information, additional information (skills), and resume upload.
 

- **Backend:**
  - API built with Node.js and Express.
  - Handles user registration, including password hashing and file upload.
  - Stores user data and skills in a PostgreSQL database.

## Installation



### Setup
1. **Clone the Repository:**

2. **Install Backend Dependencies:**
Navigate to the backend directory and install dependencies:
```
cd backend
 npm install
```
4. Set Up the Database:
Create a PostgreSQL database and configure the pg client in backend/index.js with your database credentials.
Run the necessary SQL scripts to create the users and skills tables.
```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    resume_path VARCHAR(255)
);

CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    skill VARCHAR(255)
);
```

5. **Start the backend server:**
```
nodemon index.js
```

6. **Install Frontend Dependencies:**
Navigate to the frontend directory and install dependencies:

```
cd ../frontend
npm install
```
7. **Run the Frontend:**
Start the frontend development server:
```
npm run dev
```
