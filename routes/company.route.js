const express = require('express');
const routes = express.Router();

const { CompanyRegistration,getAllCompany,getCompanyById} = require('../controllers/company.controller')


routes.post("/addcompany", CompanyRegistration);
routes.get('/companies', getAllCompany)
routes.get('/company/:id', getCompanyById)

module.exports = routes;