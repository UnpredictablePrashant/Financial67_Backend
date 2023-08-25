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
                    res.send({login: true,email:data.email})
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
async function updateUserById(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: "Error updating user by ID", error });
  }
}

async function deleteUserById(req, res) {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user by ID", error });
  }
}

async function getUserByEmail(req, res) {
  try {
    const userEmail = req.params.email;
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error getting user by email", error });
  }
}

module.exports = {
  UserRegistration,
  getAllUser,
  getUserById,
  UserLogin,
  updateUserById, // Added function
  deleteUserById, // Added function
  getUserByEmail, // Added function
};