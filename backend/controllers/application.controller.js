const Application = require('../models/Application'); 

function simulateDecisionEngine(applicationData) {
  const approvalStatus = Math.random() < 0.5 ? 'Approved' : 'Rejected';
  return {
    approvalStatus,
    decisionDate: new Date()
  };
}

exports.submitApplication = async (req, res) => {
  const applicationData = req.body;
  try {
    const newApplication = new Application(applicationData);
    await newApplication.save();

    const decision = simulateDecisionEngine(applicationData);

    await Application.findByIdAndUpdate(newApplication._id, { $set: decision });

    res.json(decision);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
