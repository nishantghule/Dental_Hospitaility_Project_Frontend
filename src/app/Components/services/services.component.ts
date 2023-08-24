import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  dentalimplant() {
    window.open('https://en.wikipedia.org/wiki/Dental_implant', '_blank');
  }

  teethwhite(){
    window.open('https://en.wikipedia.org/wiki/Tooth_whitening','_blank')
  }

  endodonticprocess() {
    window.open('https://en.wikipedia.org/wiki/Endodontics', '_blank');
  }

  restoratioprocessn() {
    window.open('https://en.wikipedia.org/wiki/Dental_restoration', '_blank');
  }

  extraction() {
    window.open('https://en.wikipedia.org/wiki/Dental_extraction', '_blank');
  }

  checkup() {
    window.open('https://en.wikipedia.org/wiki/Dentistry', '_blank');
  }

}
