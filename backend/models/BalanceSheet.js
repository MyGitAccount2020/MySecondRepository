const mongoose = require('mongoose');

const balanceSheetSchema = new mongoose.Schema({
  applicationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application', 
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  month: {
    type: Number,
    required: true
  },
  profitOrLoss: {
    type: Number,
    required: true
  },
  assetValue: {
    type: Number,
    required: true
  }
});

const BalanceSheet = mongoose.model('BalanceSheet', balanceSheetSchema);

module.exports = BalanceSheet;
