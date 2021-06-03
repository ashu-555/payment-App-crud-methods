import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardPaymentDetail } from 'src/app/shared/payment-detail.model';


import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css']
})
export class PaymentDetailFormComponent implements OnInit {

 constructor( public service : PaymentDetailService) { }

  ngOnInit(): void {}

//formn submitt ......function............................

onSubmit(form:NgForm){
     if
     (this.service.formData.paymentDetailId == 0)
     this.insertRecord(form);
     else
     this.updateRecord(form);
        
      
    }

//insert.........................................
insertRecord(form:NgForm){
    this.service.postpaymentDetail().subscribe(
      res =>{
      // this.resetForm(form)

      },
      err => { console.log(err); }
      );
      

}

//update.....................................

updateRecord(form:NgForm){
    this.service.putpaymentDetail().subscribe(
      res =>{
      // this.resetForm(form)

      },
      err => { console.log(err); }
      );
    

}



    resetForm(form:NgForm){
      form.form.reset();
      this.service.formData = new CardPaymentDetail();
    }
  
 
}
