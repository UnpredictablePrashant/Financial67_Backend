const User  = require('../models/user.model');
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JWT_SECRET_KEY
const hashKey = process.env.HASH_KEY;

async function UserRegistration(req, res) {
    console.log(req.body);
    req.body.password = crypto
        .createHash("sha256", hashKey)
        .update(req.body.password)
        .digest("hex");
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                res.status(400).json({ message: "user already exist" });
            } else {
                const newUser = new User({ ...req.body });
                newUser.save()
                    .then(data => {
                        console.log({ data });
                        res.json({ message: "user registered" }).status(200);
                    }).catch(err => res.json({ message: "user not registered", err: err }).status(200)
                    )
            }
        }).catch(err => res.send({ message: "something went wrong"}))
}


async function UserLogin(req,res){
    console.log(req.body);
    const { email, password } = req.body;
    try{
        if (!email || !password) {
            console.log("Please fill all the details");
            res.send({ message: "Please fill all the details" });
          } else {
            await User.findOne({ email: email })
            .then(result => {
                if (result) {
                    req.body.password = crypto
                      .createHash("sha256", hashKey)
                      .update(req.body.password)
                      .digest("hex");
                    if (req.body.password === result.password) {
                      //create jwt token
                      console.log(result.userType)
                      let data = {
                        email: req.body.email,
                        userType: result.userType,
                        id: result._id,
                      };
                      const jwtToken = jwt.sign(data, jwtSecretKey, { expiresIn: "60m" });
                      // console.log(resultpayload);
                      res.cookie('token', jwtToken);
                      res.cookie('userid', result._id);
                    //   res.send(resultpayload);
                    res.send({login: true})
                    } else {
                      res.status(400).send("Wrong Password");
                    }
                  }
            })
            .catch(err => res.status(400).send("Wrong Password"));
          }
    }catch{
        res.json({ message: "Something went wrong", err: err }).status(200)
    }
}

async function getAllUser(req,res){
    User.find({})
    .then(result => res.send(result))
    .catch(err => res.send({message: "something went wrong"}))
}
async function getUserById(req,res){
    let id = req.params.id
    console.log(id)
    User.findById(id)
    .then(result => res.send(result))
    .catch(err => res.send({message: "something went wrong"}))
}

module.exports= {UserRegistration,getAllUser,getUserById,UserLogin}

