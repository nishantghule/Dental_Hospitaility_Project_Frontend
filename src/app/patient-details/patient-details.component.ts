import { Component } from '@angular/core';
import { Patients } from '../model/Patients';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {

  patientsId: number = 0;
  patients: Patients=new Patients();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: ServicesService) { }

    ngOnInit() {
      this.patients = new Patients();
  
      this. patientsId = this.route.snapshot.params['patientsId'];
      
    
}

list(){
  this.router.navigate(['list']);
}
}
