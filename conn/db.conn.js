const mongoose = require('mongoose');
require('dotenv').config()

const connect = () => {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("db Connected")).catch((err)=>{
        console.log(err) 
      })
};

module.exports = connect;