import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerapplyformComponent } from './customerapplyform/customerapplyform.component';
import { CustomerapplydocumentComponent } from './customerapplydocument/customerapplydocument.component';
import { CustomerapplyresponseComponent } from './customerapplyresponse/customerapplyresponse.component';

const routes: Routes = [
  {path: '', component: CustomerapplyformComponent},
  {path: 'applyform', component: CustomerapplyformComponent},
  {path: 'applydoc/:email', component:  CustomerapplydocumentComponent},
  {path: 'applyres/:email', component: CustomerapplyresponseComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
