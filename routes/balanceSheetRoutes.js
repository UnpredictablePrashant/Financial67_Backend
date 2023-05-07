const express = require("express");
const router = express.Router();
const {
    createBalanceSheet,
    getAllBalanceSheets,
    getBalanceSheetByCompanyId,
    updateBalanceSheetByCompanyId,
    deleteBalanceSheetByCompanyId,
  } = require("../controllers/balanceSheetController");

router.post("/create", createBalanceSheet);
router.get("/", getAllBalanceSheets);
router.get("/:companyId", getBalanceSheetByCompanyId);
router.put("/:companyId", updateBalanceSheetByCompanyId);
router.delete("/:companyId", deleteBalanceSheetByCompanyId);

module.exports = router;
