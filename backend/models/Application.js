const mongoose = require('mongoose');

// Define the schema for applications
const applicationSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true
  },
  loanAmount: {
    type: Number,
    required: true
  },
  submissionDate: {
    type: Date,
    default: Date.now
  },
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
