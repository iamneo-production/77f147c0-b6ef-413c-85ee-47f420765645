import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { GenerateAadharComponent } from './generate-aadhar/generate-aadhar.component';
const routes: Routes = [
  {path: '', component: SignupComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'gaadhar/:id', component: GenerateAadharComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
