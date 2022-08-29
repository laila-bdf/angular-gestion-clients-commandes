import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PageEvent} from '@angular/material/paginator';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-component',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientComponentComponent implements OnInit {

  totalNumber!: number;
  clients!: Client[];
  pageEvent : PageEvent = new PageEvent();

  filterparNom:string ="";
  filterparPrenom:string="";
  clientdeleted!:Client;

  constructor(private clientService: ClientService, private router:Router) {
   
   }

  ngOnInit(): void {
    this.pageEvent.pageIndex=0;
    this.pageEvent.pageSize=3;
    this.filter();
  }

  getClients(pageIndex:number,pageSize:number) {
    this.clientService.getClientsListPage(pageIndex,pageSize).subscribe(data =>{
      this.clients =data['content'];
      this.totalNumber = data['totalElements'];
   });
  }

  onPagechange(event : PageEvent){
    this.pageEvent = event;
    //this.getClients(event.pageIndex,event.pageSize);
    this.filter();
  }

  
  filter(){
    console.log(this.filterparNom,this.filterparPrenom,this.pageEvent.pageIndex,this.pageEvent.pageSize);
    this.clientService.filterClients(this.filterparNom,this.filterparPrenom,this.pageEvent.pageIndex,this.pageEvent.pageSize).subscribe(
      data =>{
      this.clients =data['content']; 
      this.totalNumber = data['totalElements'];}
      );
  }

  updateClient(id:number){
    this.router.navigate(['update-client',id]);
  }
  
  async deleteClient(id:Number)  {
    this.clientService.deleteClient(id).subscribe(  data=>
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
