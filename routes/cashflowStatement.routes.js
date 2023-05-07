const express = require("express");
const router = express.Router();
const { createCashflowStatement, getAllCashFlowStatements } = require("../controllers/cashflowStatement.controller");

router.post("/create", createCashflowStatement);
router.get("/", getAllCashFlowStatements);

module.exports = router;