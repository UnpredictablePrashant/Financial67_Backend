const express = require("express");
const router = express.Router();
const { createCashflowStatement, getAllCashFlowStatements, getCashFlowStatementById, deleteCashflowStatementByCompanyId, updateCashflowStatementByCompanyId } = require("../controllers/cashflowStatement.controller");

router.post("/create", createCashflowStatement);
router.get("/", getAllCashFlowStatements);
router.get('/:id', getCashFlowStatementById);
router.put("/:companyId", updateCashflowStatementByCompanyId);
router.delete("/:id", deleteCashflowStatementByCompanyId);


module.exports = router;