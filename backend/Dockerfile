FROM node
# COPY . /usr/share/
# WORKDIR /usr/share
# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire backend code to the container
COPY . .

# Expose the port that the backend will run on
EXPOSE 3000

# Start the backend application
CMD ["node", "index.js"]