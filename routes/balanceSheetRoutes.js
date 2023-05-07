const express = require("express");
const router = express.Router();
const {
  createBalanceSheet,
  getAllBalanceSheets,
  getBalanceSheetByCompanyId,
  updateBalanceSheetByCompanyId,
  deleteBalanceSheetByCompanyId,
} = require("../controllers/balanceSheet.controller");

router.post("/create", createBalanceSheet);
router.get("/", getAllBalanceSheets);
router.get("/:id", getBalanceSheetByCompanyId);
router.put("/:id", updateBalanceSheetByCompanyId);
router.delete("/:id", deleteBalanceSheetByCompanyId);

module.exports = router;
