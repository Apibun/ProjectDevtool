# FROM node
# COPY . /usr/share/
# WORKDIR /usr/share
# Set the working directory in the container
# Use the official Node.js base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci

# Install nodemon globally
RUN npm install -g nodemon

# Copy the entire backend code to the container
COPY . .

# Expose the port that the backend will run on
EXPOSE 3000

# Start the backend application with "nodemon" using "npm run serve" command
CMD ["nodemon", "index.js"]