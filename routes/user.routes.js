const express = require('express');
const routes = express.Router();

const { UserRegistration,UserLogin,getAllUser,getUserById} = require('../controllers/user.controller')


routes.post("/register", UserRegistration);
routes.post("/login", UserLogin);
routes.get('/users', getAllUser)
routes.get('/user/:id', getUserById)

module.exports = routes;