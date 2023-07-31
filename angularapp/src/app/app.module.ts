import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerapplyformComponent } from './customerapplyform/customerapplyform.component';
import { CustomerapplydocumentComponent } from './customerapplydocument/customerapplydocument.component';
import { CustomerapplyresponseComponent } from './customerapplyresponse/customerapplyresponse.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AadharComponent } from './aadhar/aadhar.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { ApplieddocumentsComponent } from './applieddocuments/applieddocuments.component';
import { CorrectiondocumentsComponent } from './correctiondocuments/correctiondocuments.component';
import { CustomercorrectiondocumentComponent } from './customercorrectiondocument/customercorrectiondocument.component';
import { CustomercorrectionformComponent } from './customercorrectionform/customercorrectionform.component';
import { GenerateAadharComponent } from './generate-aadhar/generate-aadhar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TrackpageComponent } from './trackpage/trackpage.component';
import { TrackstatusComponent } from './trackstatus/trackstatus.component';
import { VerificationComponent } from './verification/verification.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerapplyformComponent,
    CustomerapplydocumentComponent,
    CustomerapplyresponseComponent,
    NavbarComponent,
    AadharComponent,
    AdminhomeComponent,
    AdminnavComponent,
    ApplieddocumentsComponent,
    CorrectiondocumentsComponent,
    CustomercorrectiondocumentComponent,
    CustomercorrectionformComponent,
    GenerateAadharComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    TrackpageComponent,
    TrackstatusComponent,
    VerificationComponent
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

