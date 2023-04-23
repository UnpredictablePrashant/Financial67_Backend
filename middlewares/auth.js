const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JWT_SECRET_KEY;
const Authorization = (req, res, next) => {
    console.log("middleware called")
    // const token = req.headers.access_token;
    // console.log(req.cookies.token)
    const bearerHeader = req.cookies.token

    if (bearerHeader) {
        jwt.verify(bearerHeader, jwtSecretKey, (err,data) => {
            if (err) {
                res.send({ result: "Invalid Token" })
            } else {
                console.log(data)
                next();
            }
        })

    } else {
        res.send({
            result: "Invalid Token"
        })
    }
}
module.exports = Authorization;