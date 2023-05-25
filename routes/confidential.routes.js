const express = require("express");
const router = express.Router();
const { createConfidential, getAllConfidential, getConfidentialById, updateConfidentialByCompanyId, deleteConfidentialByCompanyId } = require("../controllers/confidential.controller");

router.post("/create", createConfidential);
router.get("/", getAllConfidential);
router.get('/confidential/:id', getConfidentialById)
router.put("/:companyId", updateConfidentialByCompanyId);
router.delete("/:id", deleteConfidentialByCompanyId);


module.exports = router;