const express = require('express');
const router = express.Router();
const profitabilityController = require('../controllers/profitability.controller');


router.get('/', profitabilityController.getAllProfitabilitiesSales);
// router.get('/', profitabilityController.getAllProfitabilitiesRoI);

// router.get('/:id', profitabilitySalesController.getProfitabilityById);

module.exports = router;
