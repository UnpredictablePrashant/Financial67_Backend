const mongoose = require('mongoose');
const { Schema } = mongoose;

 

const userSchema = new Schema({
    name:{
        type: String,
        required: "Name is required",
        trim: true,

    },
    email:{
        type: String,
        required: "Email is required",
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: "Password is required",
        minlength: 6
    },
    accountCreationDate: {
        type: Date,
        default: Date.now() 
    },
    usertype: {
        type: String,
        default: "student"
    }
},
{
    collection: "User"
}
);

const User = mongoose.model("User", userSchema);

module.exports = User
