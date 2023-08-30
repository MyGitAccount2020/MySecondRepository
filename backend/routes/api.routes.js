const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application.controller');

// Application routes
router.post('/submit', applicationController.submitApplication);

module.exports = router;
