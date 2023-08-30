function fetchBalanceSheet(accountingProvider, businessId) {
   
    const simulatedBalanceSheet = [ 
      {
        year: 2022,
        month: 8,
        profitOrLoss: 15000,
        assetValue: 200000
      },
    ];
  
    return simulatedBalanceSheet;
  }
  
  module.exports = {
    fetchBalanceSheet
  };
  