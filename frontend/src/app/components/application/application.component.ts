import { Component } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {
  businessDetails = {
    businessName: '',
    loanAmount: 0
  };

  selectedAccountingProvider = '';
  balanceSheet: any[] = [];

  constructor() {
    // Note for me: here we can fetch the application details, accounting provider, and balance sheet data here
    this.businessDetails = {
      businessName: 'Example Business',
      loanAmount: 50000
    };
    this.selectedAccountingProvider = 'Provider A';
    this.balanceSheet = [
      {
        year: 2020,
        month: 12,
        profitOrLoss: 25000,
        assetValue: 1234
      }
    ];
  }

  submitReview() {
    console.log('Review submitted');
    alert("Review completed")
  }
}
