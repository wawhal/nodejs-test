# Step 1: Fetch a base container with node installed
FROM node:carbon

# Set a working directory
WORKDIR /usr/src/app

# Copy package.json for installing dependencies
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the project
COPY ./* ./

# Expose post 3000
EXPOSE 3000 

# Run the server
CMD ["node", "server.js"] 
