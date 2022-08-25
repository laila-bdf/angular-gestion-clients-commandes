import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponentComponent } from './clientComponent/client-list/client-list.component';
import { ClientDetailsComponent } from './clientComponent/client-details/client-details.component';
import { CreateClientComponent } from './clientComponent/create-client/create-client.component';
import { UpdateClientComponent } from './clientComponent/update-client/update-client.component';

const routes: Routes = [
  {path:"",redirectTo:"clients",pathMatch:"full"},
   {path:"clients",component: ClientComponentComponent},
   {path:"create-client",component: CreateClientComponent},
   {path:"update-client/:id",component: UpdateClientComponent},
   {path:"client-details/:id",component: ClientDetailsComponent }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
