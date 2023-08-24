import { Component } from '@angular/core';
import { Payment } from '../model/Payment';
import { ActivatedRoute, Router } from '@angular/router';
import { PayserviceService } from '../Payments/payservice.service';

@Component({
  selector: 'app-methodspayment',
  templateUrl: './methodspayment.component.html',
  styleUrls: ['./methodspayment.component.css']
})
export class MethodspaymentComponent {
  alertMessage() {
    alert( 'THANK YOU .... Payment Successfull..');
    
  }
  
submitted = false;
payment =new Payment();

constructor(private route:ActivatedRoute, private router: Router,
  private service : PayserviceService) { }

onSubmit()
{
  this.submitted=true;

  this.save();
}

save()
{
  this.service.AddPayment(this.payment).subscribe();
  
}
gotoList() {
  this.router.navigate(['ReceiptComponent']);
}


}

