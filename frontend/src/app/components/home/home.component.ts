import { Component } from '@angular/core';
import { ApplicationService } from 'src/app/application.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  businessDetails = {
    businessName: '',
    loanAmount: 0
  };

  selectedAccountingProvider = '';
  balanceSheet: any[] = [];

  accountingProviders = ['Provider A', 'Provider B', 'Provider C'];

  constructor(private applicationService: ApplicationService) {}

  submitApplication() {
    this.applicationService.submitApplication(this.businessDetails)
      .then(response => {
        console.log('Application submitted:', response.data);
        alert(this.businessDetails.businessName)
      })
      .catch(error => {
        console.error('Error submitting application:', error);
      });
  }

  requestBalanceSheet() {
    this.balanceSheet = [
      {
        year: 2020,
        month: 12,
        profitOrLoss: 25000,
        assetValue: 1234
      }
    ];
  }

  reviewComplete() {
    alert('Review completed');
  }
}
