const express = require('express');
const router = express.Router();
const balanceSheetController = require('../controllers/balanceSheet.controller');

// Endpoint for fetching balance sheet data
router.get('/:applicationId', balanceSheetController.getBalanceSheet);

module.exports = router;
