const express = require('express');

function CheckController(req, res) {
    console.log('Hello check controller')
    res.send("Hello World!");
}
module.exports = {CheckController};
