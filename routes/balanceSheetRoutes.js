const express = require("express");
const router = express.Router();
const { createBalanceSheet, getAllBalanceSheets } = require("../controllers/balanceSheet.controller");

router.post("/create", createBalanceSheet);
router.get("/", getAllBalanceSheets);

module.exports = router;
