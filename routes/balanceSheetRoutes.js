const express = require("express");
const router = express.Router();
const { createBalanceSheet, getAllBalanceSheets } = require("../controllers/balanceSheetController");

router.post("/create", createBalanceSheet);
router.get("/", getAllBalanceSheets);

module.exports = router;
