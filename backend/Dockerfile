FROM node
# COPY . /usr/share/
# WORKDIR /usr/share
# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the desired port for the backend application
EXPOSE 3000
CMD ["npm", "serve"]