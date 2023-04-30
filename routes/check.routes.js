const express = require('express');
const routes = express.Router();

const {CheckController} = require('../controllers/check.controller')


routes.get("/check",CheckController)

module.exports = routes;