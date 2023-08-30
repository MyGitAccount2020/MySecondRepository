function makeDecision(applicationData) {
    const simulatedDecision = {
      approvalStatus: Math.random() < 0.5 ? 'Approved' : 'Rejected',
      decisionDate: new Date()
    };
  
    return simulatedDecision;
  }
  
  module.exports = {
    makeDecision
  };
  