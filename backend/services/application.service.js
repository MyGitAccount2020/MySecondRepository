const Application = require('../models/Application.js'); // Assuming you have a MongoDB model for applications

async function createApplication(applicationData) {
  try {
    const newApplication = new Application(applicationData);
    await newApplication.save();
    return newApplication;
  } catch (error) {
    throw error;
  }
}

async function getApplicationById(applicationId) {
  try {
    const application = await Application.findById(applicationId);
    return application;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createApplication,
  getApplicationById
};
