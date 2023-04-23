require('dotenv').config()
const express = require('express');
const userRoutes = require('./routes/user.routes')
const checkRoutes=require("./routes/check.routes")
const dbconnect = require("./conn/db.conn")

const app = express();
app.use(express.json());

app.use('/', userRoutes)
app.use('/hello', checkRoutes)

app.listen(process.env.PORT||3001,()=>{
    dbconnect()
    console.log(`listening on http://localhost:${process.env.PORT}`);
})