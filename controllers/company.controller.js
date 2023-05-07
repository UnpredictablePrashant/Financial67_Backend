const Company  = require('../models/company.model');
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JWT_SECRET_KEY
const hashKey = process.env.HASH_KEY;

async function CompanyRegistration(req, res) {
       Company.findOne({ companyName: req.body.companyName })
        .then(company => {
            if (company) {
                res.status(400).json({ message: "Company already exist" });
            } else {
                const newCompany = new Company({ ...req.body });
                newCompany.save()
                    .then(data => {
                        console.log({ data });
                        res.json({ message: "Company registered" }).status(200);
                    }).catch(err => res.json({ message: "Company not registered", err: err }).status(200)
                    )
            }
        }).catch(err => res.send({ message: "something went wrong"}))
}

async function getAllCompany(req,res){
    Company.find({})
    .then(result => res.send(result))
    .catch(err => res.send({message: "something went wrong"}))
}


async function getCompanyById(req,res){
    let id = req.params.id
    console.log(id)
    Company.findById(id)
    .then(result => res.send(result))
    .catch(err => res.send({message: "something went wrong"}))
}

module.exports= {CompanyRegistration,getAllCompany,getCompanyById}

