import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/model/commande';
import { Client } from '../../model/client';
import {PageEvent} from '@angular/material/paginator';
import { ClientService } from '../../services/client.service';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id!:number;
  client:Client = new Client();
  commandes!:Commande[];
  pageEvent : PageEvent = new PageEvent();
  totalNumber!: number;

  constructor(private route:ActivatedRoute ,private clientService :ClientService, private commandeService:CommandeService) { }

  ngOnInit(): void {
    this.pageEvent.pageIndex=0;
    this.pageEvent.pageSize=3;
    this.id = this.route.snapshot.params['id'];
      
    this.getClientDetails();
    this.getCommandeByClientId(this.pageEvent.pageIndex,this.pageEvent.pageSize);
  }

  getClientDetails(){
    this.clientService.getClientById(this.id).subscribe(
      data => this.client=data,
      erroe=>console.error()
    );
   
  }
  onPagechange(event : PageEvent){
    this.pageEvent = event;
    this.getCommandeByClientId(this.pageEvent.pageIndex,this.pageEvent.pageSize);
  }

  getCommandeByClientId(pageIndex:number,pageSize:number){
    this.commandeService.getCommandesByClientId(this.id,pageIndex,pageSize).subscribe(data=>{
      this.commandes = data['content'];
      this.totalNumber = data['totalElements'];

    }
      );
  }
}
