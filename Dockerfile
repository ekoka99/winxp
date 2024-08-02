# Use Node.js 16 as the base image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Clear npm cache
RUN npm cache clean --force

# Install dependencies using ci command
RUN npm ci --legacy-peer-deps

# Update Browserslist database
RUN npx update-browserslist-db@latest

# Copy the rest of the application code
COPY . .

# Temporarily disable ESLint for the build
ENV DISABLE_ESLINT_PLUGIN=true

# Build the app
RUN npm run build

# Set the command to serve the built app
CMD ["npx", "serve", "-s", "build"]

# Expose port 3000
EXPOSE 3000
