import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patients } from '../model/Patients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  baseUrl='http://localhost:8083';
  constructor(private http:HttpClient){}

  

  getAllPatients() {
     return this.http.get(`${this.baseUrl}/getallpatients`);
  }

  getOnePatient(patientsId: number) {
    throw new Error('Method not implemented.');
  }



  createPatient(patients: Object):Observable <Object>
  {
  
    return this.http.post(`${this.baseUrl}/addpat`,patients);
  }

}
