import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplieddocumentsComponent } from './applieddocuments/applieddocuments.component';
import { VerificationComponent } from './verification/verification.component';
import { CustomercorrectiondocumentComponent } from './customercorrectiondocument/customercorrectiondocument.component';
import { CustomercorrectionformComponent } from './customercorrectionform/customercorrectionform.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrackpageComponent } from './trackpage/trackpage.component';
import { TrackstatusComponent } from './trackstatus/trackstatus.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplieddocumentsComponent,
    VerificationComponent,
    CustomercorrectiondocumentComponent,
    CustomercorrectionformComponent,
    HomeComponent,
    NavbarComponent,
    TrackpageComponent,
    TrackstatusComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
