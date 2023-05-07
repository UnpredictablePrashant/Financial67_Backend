const express = require('express');
const routes = express.Router();

const { UserRegistration,UserLogin,getAllUser,getUserById,   updateUserById, // Added import
deleteUserById, 
getUserByEmail, } = require('../controllers/user.controller')


routes.post("/register", UserRegistration);
routes.post("/login", UserLogin);
routes.get('/users', getAllUser)
routes.get('/user/:id', getUserById)
routes.put("/user/:id", updateUserById); // Added route
routes.delete("/user/:id", deleteUserById); // Added route
routes.get("/user/email/:email", getUserByEmail); // Added route

module.exports = routes;