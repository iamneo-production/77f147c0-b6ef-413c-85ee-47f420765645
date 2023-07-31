import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CorrectiondocumentsComponent } from './correctiondocuments/correctiondocuments.component';
import { AadharComponent } from './aadhar/aadhar.component';

const routes: Routes = [
  {path: '', component: AdminhomeComponent},
  {path: 'adminhome', component: AdminhomeComponent},
  {path: 'corrdoc', component: CorrectiondocumentsComponent},
  {path: 'aadhar/:id', component: AadharComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
