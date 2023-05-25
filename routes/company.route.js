const express = require('express');
const routes = express.Router();

const { CompanyRegistration,getAllCompany,getCompanyById, updateCompanyById, deleteCompanyById} = require('../controllers/company.controller')


routes.post("/addcompany", CompanyRegistration);
routes.get('/companies', getAllCompany)
routes.get('/company/:id', getCompanyById)
routes.put("/company/:id", updateCompanyById);
routes.delete("/company/:id", deleteCompanyById);
module.exports = routes;