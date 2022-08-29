import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Commande } from 'src/app/model/commande';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {

  totalNumber!: number;
  commandes!: Commande[];
  pageEvent : PageEvent = new PageEvent();

  
  commanddeleted!:Commande;

  constructor(private commandeService: CommandeService, private router:Router) {
   
   }

  ngOnInit(): void {
    this.pageEvent.pageIndex=0;
    this.pageEvent.pageSize=3;
    this.getCommandes(0,3);
   
  }

  getCommandes(pageIndex:number,pageSize:number) {
    this.commandeService.getCommandesPage(pageIndex,pageSize).subscribe(data =>{
      this.commandes =data['content'];
      this.totalNumber = data['totalElements'];
   });
  }

  onPagechange(event : PageEvent){
    this.pageEvent = event;
    this.getCommandes(event.pageIndex,event.pageSize);
   
  }

  
  updateCommande(id:number){
    this.router.navigate(['update-commande',id]);
  }
  
  async deleteCommande(id:Number)  {
    this.commandeService.deleteCommande(id).subscribe(  data=>
      {
         console.log(data);
      }
      , error=>console.error());

    await new Promise(r => setTimeout(r, 1000));
    this.getCommandes(this.pageEvent.pageIndex,this.pageEvent.pageSize);
  }

  showcommandeDetails(id:Number){
    this.router.navigate(['commande-details',id]);
  }

  onOpenDeleteModel(commande:Commande){
    this.commanddeleted=commande;
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
