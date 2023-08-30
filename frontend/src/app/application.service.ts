import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private baseUrl = 'http://localhost:3000/api'; 

  constructor() {}

  submitApplication(applicationData: any) {
    const url = `${this.baseUrl}/submit`;
    return axios.post(url, applicationData);
  }

}
