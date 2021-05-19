import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  formData:PaymentDetail = new PaymentDetail();
  listOfPaymentDetails: PaymentDetail[];
  

  readonly baseURL = "https://localhost:44316/api/PaymentDetails";
  
  postPaymentDetails(){
    return this.http.post(this.baseURL, this.formData);
  }

  getPaymentDetails(){
    return this.http.get(this.baseURL)
    .toPromise().then(res => this.listOfPaymentDetails = res as PaymentDetail[])
  }


}
