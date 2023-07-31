import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomercorrectionformComponent } from './customercorrectionform/customercorrectionform.component';
import { HomeComponent } from './home/home.component';
import { CustomercorrectiondocumentComponent } from './customercorrectiondocument/customercorrectiondocument.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'customercorrectionform', component: CustomercorrectionformComponent},
  {path: 'Customercorrectiondocument', component: CustomercorrectiondocumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
