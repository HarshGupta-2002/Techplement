
# User Registration System

Developed a user registration system that allows users to sign up, log in, and manage their profile.

## Features

Implemented functionalities include

- user input validation (on both client side & server side)
- storage of user data in a mongodb database
- password hashing for security using JWT (Javascript Web Tokens)
- Responsive to every screen

## TechStack

MERN

- **M** - MondoDB to user credentials
- **E** - Express.js to create the server
- **R** - React.js for frontend development
- **N** - Node.js for managing packages, and backend development
## Demo

[User Registration System](https://youtu.be/TEaB7sHy2EY)

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (running locally or a MongoDB Atlas account)
## Installation

1. **Clone the Repository**

   - Open a terminal or command prompt.
   - Clone the repository using the following command:
     ```bash
     git clone https://github.com/HarshGupta-2002/Techplement.git
     ```
   - Navigate to the `week1-tasks` directory:
     ```bash
     cd Techplement/week1-tasks
     ```

2. **Server Setup**
   - Navigate to the server directory:
     ```bash
     cd server
     ```
   - Install the required Node.js dependencies:
     ```bash
     npm install
     ```
   - Set up environment variables:
     - Create a `.env` file in the `server` directory.
     - Add the following environment variables:
       ```env
       PORT=5000
       MONGO_URI=your_mongodb_connection_string
       JWT_SECRET=your_jwt_secret
       ```
     - Replace `your_mongodb_connection_string` and `your_jwt_secret` with your actual MongoDB connection string and JWT secret.

3. **Client Setup**
   - Navigate to the client directory:
     ```bash
     cd ../client
     ```
   - Install the required Node.js dependencies:
     ```bash
     npm install
     ```
   - (Optional) Set up environment variables for the client:
     - If the frontend requires any environment variables, create a `.env` file in the `client` directory and add them accordingly.

## Author

- [@HarshGupta-2002](https://github.com/HarshGupta-2002)