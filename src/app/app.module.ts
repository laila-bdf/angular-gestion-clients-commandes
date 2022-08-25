import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponentComponent } from './clientComponent/client-list/client-list.component';
import { CreateClientComponent } from './clientComponent/create-client/create-client.component';
import { FormsModule} from '@angular/forms';
import { UpdateClientComponent } from './clientComponent/update-client/update-client.component';
import { ClientDetailsComponent } from './clientComponent/client-details/client-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CommandeListComponent } from './commandeComponent/commande-list/commande-list.component';
import { CommandeDetailsComponent } from './commandeComponent/commande-details/commande-details.component';
import { CreateCommandeComponent } from './commandeComponent/create-commande/create-commande.component';
import { UpdateCommandeComponent } from './commandeComponent/update-commande/update-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponentComponent,
    CreateClientComponent,
    UpdateClientComponent,
    ClientDetailsComponent,
    CommandeListComponent,
    CommandeDetailsComponent,
    CreateCommandeComponent,
    UpdateCommandeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule ,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
