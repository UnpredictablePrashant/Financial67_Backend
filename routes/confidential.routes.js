const express = require("express");
const router = express.Router();
const { createConfidential, getAllConfidential, getConfidentialById } = require("../controllers/confidential.controller");

router.post("/create", createConfidential);
router.get("/", getAllConfidential);
router.get('/confidential/:id', getConfidentialById)


module.exports = router;