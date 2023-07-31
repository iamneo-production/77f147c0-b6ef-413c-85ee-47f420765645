import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackstatusComponent } from './trackstatus/trackstatus.component';
import { TrackpageComponent } from './trackpage/trackpage.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackstatusComponent,
    TrackpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }