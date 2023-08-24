import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PayserviceService {
  baseUrl='http://localhost:8083';
  constructor(private http:HttpClient){}

  AddPayment(payment: Object):Observable <Object>
  {
  
    return this.http.post(`${this.baseUrl}/addpayment`,payment);
  }
}
