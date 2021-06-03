import { Component, OnInit } from '@angular/core';
import { CardPaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  constructor( public service :PaymentDetailService) { }





  ngOnInit(): void {
    this.service.refreshlist();
  }
  populatedForm(selectedRecord:CardPaymentDetail){
    this.service.formData = Object.assign({},selectedRecord);
  }
  //delet........................
  onDelete( id:Number){
      this.service.deletepaymentDetail(id)
      .subscribe(
        res=>{
          
        },
        err=>{console.log(err)}
      )

    }


}
function subscribe(arg0: (res: any) => void, arg1: (err: any) => void) {
  throw new Error('Function not implemented.');
}

