import { Injectable } from '@angular/core';

import  {HttpClient, HttpHeaders,} from '@angular/common/http'
import { CardPaymentDetail } from './payment-detail.model';
import { identifierName, Identifiers } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  list :CardPaymentDetail [];
  

   constructor(private http :HttpClient) { }
  
  formData :CardPaymentDetail = new CardPaymentDetail();


     //post methodes....................................
     postpaymentDetail(){
       return this.http.post('https://localhost:44393/api/CardPaymentDetails',this.formData);
      }


  
      
     //get methode..........................................
     refreshlist() {
       return this.http.get('https://localhost:44393/api/CardPaymentDetails')
       .toPromise()
       .then(res => this.list = res as CardPaymentDetail[]);
      
     }

      
      //put update method..................................
    
      putpaymentDetail(){
        return this.http.put(`${'https://localhost:44393/api/CardPaymentDetails'}/${this.formData.paymentDetailId}`,this.formData);
      }



    //  //delet.........................
     deletepaymentDetail(id:Number){
      return this.http.delete(`${'https://localhost:44393/api/CardPaymentDetails'}/${id}`);
     }
 }
