const express = require('express');
const router = express.Router();
const BalanceSheet = require('../models/BalanceSheet.js'); 

router.get('/:applicationId', async (req, res) => {
  const applicationId = req.params.applicationId;

  try {
    const balanceSheet = await BalanceSheet.find({ applicationId });

    res.json(balanceSheet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
