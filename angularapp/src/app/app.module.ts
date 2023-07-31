import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AadharComponent } from './aadhar/aadhar.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { CorrectiondocumentsComponent } from './correctiondocuments/correctiondocuments.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    AdminnavComponent,
    CorrectiondocumentsComponent,
    AadharComponent
    
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
