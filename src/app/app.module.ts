import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponentComponent } from './client-component/client-component.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { FormsModule} from '@angular/forms';
import { UpdateClientComponent } from './update-client/update-client.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponentComponent,
    CreateClientComponent,
    UpdateClientComponent,
    DeleteClientComponent,
    ClientDetailsComponent
   
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
