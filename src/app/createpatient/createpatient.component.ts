import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patients } from '../model/Patients';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.css']
})
export class CreatepatientComponent {

  alertMessage() {
    alert('CONGRATULATIONS... YOU HAVE BEEN REGISTERED SUCCESFULLY');
    
  }

  submitted = false;
  patients = new Patients();

  constructor(private route:ActivatedRoute, private router: Router,
    private service : ServicesService) { }

  onSubmit()
  {
    this.submitted=true;

    this.save();
  }

  save()
  {
    this.service.createPatient(this.patients).subscribe();
    // this.service.createPlayer(this.player).subscribe((data)=>{
    //   console.log(data);
    //   this.player=new Player();
    //   this.gotoList();
    // })
    // this.gotoList();
  }


  
 }

