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

  totalNumber!: number;
  clients!: Client[];
  pageEvent! : PageEvent;

  clientdeleted!:Client;
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

    this.getClients(0,3);
   
  }

  onPagechange(event : PageEvent){
    this.pageEvent = event;
    this.getClients(event.pageIndex,event.pageSize);
  }

   getClients(pageIndex:number,pageSize:number) {
    this.clientService.getClientsListPage(pageIndex,pageSize).subscribe(data =>{
      this.clients =data['content'];
      this.totalNumber = data['totalElements'];
   });
  }

  updateClient(id:number){
    this.router.navigate(['update-client',id]);
  }
  
  async deleteClient(id:Number)  {
    // this.router.navigate(['delete-client',id])
     this.clientService.deleteClient(id).subscribe( data=>
      {
         console.log(data);
      }
      , error=>console.error());

    await new Promise(r => setTimeout(r, 1005));
    this.getClients(this.pageEvent.pageIndex,this.pageEvent.pageSize);
  }

  showClientDetails(id:Number){
    this.router.navigate(['client-details',id]);
  }

  


  onOpenDeleteModel(client:Client){
    this.clientdeleted=client;
    const elem= document.getElementById('hidden');
    const btn = document.createElement('button');
    btn.type='button';
    btn.style.display='none';

    btn.setAttribute('data-toggle','model');
    btn?.setAttribute('data-target','#deleteClientModal');
    elem?.appendChild(btn);
    btn?.click();
  }
}
