const express = require("express");
const router = express.Router();
const { createIncomeStatement, getAllIncomeStatements, getIncomeStatementByCompanyId,deleteIncomeStatementByCompanyId, updateIncomeStatementByCompanyId } = require("../controllers/incomeStatement.controller");

router.post("/create", createIncomeStatement);
router.get("/", getAllIncomeStatements);
router.get("/:id",getIncomeStatementByCompanyId);

// deleete an income statement by companyid
router.delete("/:companyId", deleteIncomeStatementByCompanyId);


//update by company id

router.put('/:companyId', updateIncomeStatementByCompanyId);


module.exports = router;

//routes