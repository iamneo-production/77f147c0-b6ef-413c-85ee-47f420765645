import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
=======
import { BrowserModule } from '@angular/platform-browser';
>>>>>>> f6c32e5fe4e87dad0c7f76042a97fc081493ed6d
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CustomerapplyformComponent } from './customerapplyform/customerapplyform.component';
import { CustomerapplydocumentComponent } from './customerapplydocument/customerapplydocument.component';
import { CustomerapplyresponseComponent } from './customerapplyresponse/customerapplyresponse.component';
import { CustomercorrectionformComponent } from './customercorrectionform/customercorrectionform.component';
import { CustomercorrectiondocumentComponent } from './customercorrectiondocument/customercorrectiondocument.component';
import { ApplieddocumentsComponent } from './applieddocuments/applieddocuments.component';
import { VerificationComponent } from './verification/verification.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CorrectiondocumentsComponent } from './correctiondocuments/correctiondocuments.component';
import { AadharComponent } from './aadhar/aadhar.component';
import { TrackpageComponent } from './trackpage/trackpage.component';
import { TrackstatusComponent } from './trackstatus/trackstatus.component';
import { GenerateAadharComponent } from './generate-aadhar/generate-aadhar.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
=======
>>>>>>> f6c32e5fe4e87dad0c7f76042a97fc081493ed6d

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CustomerapplyformComponent,
    CustomerapplydocumentComponent,
    CustomerapplyresponseComponent,
    CustomercorrectionformComponent,
    CustomercorrectiondocumentComponent,
    ApplieddocumentsComponent,
    VerificationComponent,
    AdminhomeComponent,
    CorrectiondocumentsComponent,
    AadharComponent,
    TrackstatusComponent,
    TrackpageComponent,
<<<<<<< HEAD
    GenerateAadharComponent,
    NavbarComponent,
    AdminnavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
=======
    GenerateAadharComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
>>>>>>> f6c32e5fe4e87dad0c7f76042a97fc081493ed6d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }