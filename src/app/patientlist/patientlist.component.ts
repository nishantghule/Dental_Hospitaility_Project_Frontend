import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { Router } from '@angular/router';
import { Patients } from '../model/Patients';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

    patients:any=[{
    id:'',
    firstname:'',
    lastname:'',
    emailId:'',
    mobileno:''
  }]
   constructor(private service:ServicesService,private router:Router){

   }

  ngOnInit(): void {
    this.getallpatients();
  }

  getallpatients(){

    this.service.getAllPatients().subscribe((data:any)=>{
      this.patients=data;
    })
  }
 
  // we cant do by both way by taking normal getter setter also and by using Observable

  // public players: Observable<Patients[]> =of([]);
  
  // constructor(private service: ServicesService,
  //   private router: Router) {
      
  //   }

  // ngOnInit() {
  //   this.getAll();
  // }

  // getAll() {
  //   this.service.getAllPatients(). subscribe((data:any)=>{
  //     this.Patients = data;
  //     console.log(this.patients)
  //   })
  // }

  patientDetails(id: number){
    this.router.navigate(['pdetails', id]);
  }

}
