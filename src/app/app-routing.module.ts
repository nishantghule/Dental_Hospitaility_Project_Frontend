import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { TeamSectionComponent } from './Components/team-section/team-section.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { BlogComponent } from './Components/blog/blog.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { MethodspaymentComponent } from './methodspayment/methodspayment.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'team', component: TeamSectionComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'gallery', component: GalleryComponent },
  { 
    path: 'add', 
    component: CreatepatientComponent},
  {
    path: 'pdetails/:id',
    component:PatientDetailsComponent
  },
  {
    path: 'interested',
    component:TeamSectionComponent
  },
  {
    path: 'patientslist',
    component:PatientlistComponent
  },

  {
    path :'Services',
    component: ServicesComponent
  },
  {
    path :'Adddoctor',
    component: TeamSectionComponent
  },
  {
    path:'ReceiptComponent',
    component: ReceiptComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path : 'methodpayment',
    component:MethodspaymentComponent
  },
  // {
  //   path :'pay',
  //   component: PaymentComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
   
  
}
