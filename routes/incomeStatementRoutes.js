const express = require("express");
const router = express.Router();
const { createIncomeStatement, getAllIncomeStatements } = require("../controllers/incomeStatement.controller");

router.post("/create", createIncomeStatement);
router.get("/", getAllIncomeStatements);

module.exports = router;