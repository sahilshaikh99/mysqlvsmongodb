# Use an official Node.js image as the base
FROM node:20.11.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 5800

# Define the startup command
CMD ["npm", "start"]
