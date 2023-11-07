# Creating the Web Note App

Prerequisites:
- Nodejs
- Git
- MongoDB Atlas, Compass
- Postman

1. Create package.json file
> npm init -y

2. Install packages and dependencies
> npm install --save express mongoose dotenv nodemon

3. Adding "dev" script in package.json
> "dev": "nodemon server.js" 

4. Run server.js
> npm run dev

5. Create database connection using mongoose
> await mongoose.connect('your database connection string');

6. After successfully connected to the database, create a schema using mongoose
> Refer to Quick Start Guide https://mongoosejs.com/docs/index.html