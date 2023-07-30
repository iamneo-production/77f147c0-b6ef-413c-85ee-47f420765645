import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorrectiondocumentsComponent } from './correctiondocuments/correctiondocuments.component';
import { AadharComponent } from './aadhar/aadhar.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminnavComponent } from './adminnav/adminnav.component';

const routes: Routes = [
  {path: '', component:AdminhomeComponent },
  {path: 'adminhome', component: AdminhomeComponent},
  {path: 'adminnav', component: AdminnavComponent},
  {path: 'corrdoc', component: CorrectiondocumentsComponent},
  {path: 'aadhar/:id', component: AadharComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
