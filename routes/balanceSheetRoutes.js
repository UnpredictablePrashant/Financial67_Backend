const express = require("express");
const router = express.Router();
const {
    createBalanceSheet,
    getAllBalanceSheets,
    getBalanceSheetById,
    updateBalanceSheet,
    deleteBalanceSheet,
  } = require("../controllers/balanceSheetController");
  
router.post("/create", createBalanceSheet);
router.get("/", getAllBalanceSheets);
router.get("/:id", getBalanceSheetById);
router.put("/:id", updateBalanceSheet);
router.delete("/:id", deleteBalanceSheet);

module.exports = router;
