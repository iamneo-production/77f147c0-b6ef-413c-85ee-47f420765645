import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackpageComponent } from './trackpage/trackpage.component';
import { TrackstatusComponent } from './trackstatus/trackstatus.component';
const routes: Routes = [
{path: '', component: TrackpageComponent},
 {path: 'track', component: TrackstatusComponent},
 {path: 'status/:id', component: TrackpageComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
