import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplieddocumentsComponent } from './applieddocuments/applieddocuments.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
    {path: '', component: ApplieddocumentsComponent},
    {path: 'appdoc', component:  ApplieddocumentsComponent},
    {path: 'verify/:id', component: VerificationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
