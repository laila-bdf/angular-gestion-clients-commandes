import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponentComponent } from './client-component/client-component.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';

const routes: Routes = [
  {path:"",redirectTo:"clients",pathMatch:"full"},
   {path:"clients",component: ClientComponentComponent},
   {path:"create-client",component: CreateClientComponent},
   {path:"update-client/:id",component: UpdateClientComponent},
   {path:"delete-client/:id",component: DeleteClientComponent},
   {path:"client-details/:id",component: ClientDetailsComponent }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
