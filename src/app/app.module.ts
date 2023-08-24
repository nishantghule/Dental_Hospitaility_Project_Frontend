import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { TeamSectionComponent } from './Components/team-section/team-section.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { BlogComponent } from './Components/blog/blog.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WebpageallComponent } from './webpageall/webpageall.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DentalistComponent } from './dentalist/dentalist.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PaymentComponent } from './payment/payment.component';
import { MethodspaymentComponent } from './methodspayment/methodspayment.component';
import { ReceiptComponent } from './receipt/receipt.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TeamSectionComponent,
    GalleryComponent,
    TestimonialComponent,
    AppointmentComponent,
    BlogComponent,
    FooterComponent,
    WebpageallComponent,
    // AdminLoginComponent,
    DentalistComponent,
    CreatepatientComponent,
    PatientlistComponent,
    PatientDetailsComponent,
    PaymentComponent,
    CreatepatientComponent,
    MethodspaymentComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
