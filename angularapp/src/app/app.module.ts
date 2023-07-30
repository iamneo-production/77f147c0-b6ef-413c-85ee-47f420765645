import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerapplyformComponent } from './customerapplyform/customerapplyform.component';
import { CustomerapplydocumentComponent } from './customerapplydocument/customerapplydocument.component';
import { CustomerapplyresponseComponent } from './customerapplyresponse/customerapplyresponse.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerapplyformComponent,
    CustomerapplydocumentComponent,
    CustomerapplyresponseComponent,

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