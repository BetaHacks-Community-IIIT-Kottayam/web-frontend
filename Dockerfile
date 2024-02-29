# Use a base image with Node.js pre-installed
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the frontend application
RUN npm run build

# Expose the port that the frontend application will run on
EXPOSE 3000

# Command to run the frontend application
CMD ["npm", "start"]
