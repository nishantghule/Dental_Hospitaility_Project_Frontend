import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {

  dentalpage(){
    window.open('https://en.wikipedia.org/wiki/Human_tooth', '_blank');
  }

}
