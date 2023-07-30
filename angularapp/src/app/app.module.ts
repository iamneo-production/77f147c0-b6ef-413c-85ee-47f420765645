import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorrectiondocumentsComponent } from './correctiondocuments/correctiondocuments.component';
import { AadharComponent } from './aadhar/aadhar.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CorrectiondocumentsComponent,
    AadharComponent,
    AdminnavComponent,
    AdminhomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
