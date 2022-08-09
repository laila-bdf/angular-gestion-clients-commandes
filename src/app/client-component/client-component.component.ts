import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';
import {PageEvent} from '@angular/material/paginator'

@Component({
  selector: 'app-client-component',
  templateUrl: './client-component.component.html',
  styleUrls: ['./client-component.component.css']
})
export class ClientComponentComponent implements OnInit {

  totalNumber: number=0;
  clients!: Client[];
  constructor(private clientService: ClientService, private router:Router) {
   
   }

  ngOnInit(): void {
    // this.clients=[
    //   {
    //     id: 1,
    //     nom: "bouadif",
    //     prenom: "laila",
    //     dateNaiss: new Date()
  
    //   },
    //   {
    //     id: 2,
    //     nom: "bouadif",
    //     prenom: "laila",
    //     dateNaiss: new Date()
  
    //   }
    // ]

    this.clientService.getTotalClients().subscribe(data =>
      this.totalNumber=data
      );

    this.getClients();
   
  }
  onPagechange(event : PageEvent){

    this.clientService.getClientsListPage(event.pageIndex,event.pageSize).subscribe(data =>{
      this.clients=data;
      
   });
  }

  private getClients() {
    this.clientService.getClientsListPage(0,3).subscribe(data =>{
      this.clients=data;
      
   });
  }

  updateClient(id:number){
    this.router.navigate(['update-client',id]);
  }
  
  deleteClient(id:Number){
    // this.router.navigate(['delete-client',id])
    this.clientService.deleteClient(id).subscribe(data=>
      this.getClients(), error=>console.error());
  }

  showClientDetails(id:Number){
    this.router.navigate(['client-details',id]);
  }
}
