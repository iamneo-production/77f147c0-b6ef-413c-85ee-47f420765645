import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { CustomerapplyformComponent } from './customerapplyform/customerapplyform.component';
import { CustomerapplydocumentComponent } from './customerapplydocument/customerapplydocument.component';
import { CustomerapplyresponseComponent } from './customerapplyresponse/customerapplyresponse.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AadharComponent } from './aadhar/aadhar.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
=======
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerapplyformComponent } from './customerapplyform/customerapplyform.component';
import { CustomerapplydocumentComponent } from './customerapplydocument/customerapplydocument.component';
import { CustomerapplyresponseComponent } from './customerapplyresponse/customerapplyresponse.component';
import { CustomercorrectionformComponent } from './customercorrectionform/customercorrectionform.component';
import { HomeComponent } from './home/home.component';
import { CustomercorrectiondocumentComponent } from './customercorrectiondocument/customercorrectiondocument.component';
>>>>>>> f6c32e5fe4e87dad0c7f76042a97fc081493ed6d
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
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CorrectiondocumentsComponent } from './correctiondocuments/correctiondocuments.component';
import { AadharComponent } from './aadhar/aadhar.component';
import { TrackpageComponent } from './trackpage/trackpage.component';
import { TrackstatusComponent } from './trackstatus/trackstatus.component';
import { GenerateAadharComponent } from './generate-aadhar/generate-aadhar.component';

  
const routes: Routes = [
<<<<<<< HEAD
  {path: '', component: LoginComponent},
=======
 {path: '', component: LoginComponent},
>>>>>>> f6c32e5fe4e87dad0c7f76042a97fc081493ed6d
 {path: 'login', component: LoginComponent}, 
 {path: 'signup', component: SignupComponent},
 {path: 'home', component: HomeComponent},
 {path: 'applyform', component: CustomerapplyformComponent},
 {path: 'applydoc/:email', component:  CustomerapplydocumentComponent},
 {path: 'applyres/:email', component: CustomerapplyresponseComponent},
 {path: 'customercorrectionform', component: CustomercorrectionformComponent},
 {path: 'Customercorrectiondocument', component: CustomercorrectiondocumentComponent},
 {path: 'appdoc', component:  ApplieddocumentsComponent},
 {path: 'adminhome', component: AdminhomeComponent},
 {path: 'corrdoc', component: CorrectiondocumentsComponent},
 {path: 'aadhar/:id', component: AadharComponent},
 {path: 'verify/:id', component: VerificationComponent},
 {path: 'track', component: TrackstatusComponent},
 {path: 'status/:id', component: TrackpageComponent},
 {path: 'gaadhar/:id', component: GenerateAadharComponent}
<<<<<<< HEAD
];
=======
 ];
>>>>>>> f6c32e5fe4e87dad0c7f76042a97fc081493ed6d

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }