# Web Frontend

This repository contains the frontend for the IIIT-Kottayam BetaHacks Community webiste.

## Getting Started

To set up this repository locally, follow these steps:

1. Clone the repository using the `dev` branch:

   ```bash
   git clone -b dev https://github.com/BetaHacks-Community-IIIT-Kottayam/web-frontend.git

2. Install node modules:

   ```bash
   npm i

3. Install typescript types:

   ```bash
   npm install react react-dom typescript @types/react @types/react-dom --save

4. Connecting to the backend:

   - Create a `.env` file in the root folder.
   - Paste the following in the `.env` file:

     ```bash
     REACT_APP_API_URL=https://betahack-dev-server.onrender.com

5. Running locally

   ```bash
   npm start
