FROM Node:18
# Set the working directory inside the container
WORKDIR /app

# Copy .dockerignore file

# COPY .dockerignore ./

# Exclude .gitignore file

#RUN rm -f .gitignore

# Copy package.json and package-lock.json to the working directory

COPY package*.json ./

# Install dependencies

RUN npm install

# Copy all the application code to the working directory

COPY . .

# Expose the port your application will run on

EXPOSE 3001 

# Define the command to run your application

CMD ["node","index.js"]