import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { Commande } from 'src/app/model/commande';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-create-commande',
  templateUrl: './create-commande.component.html',
  styleUrls: ['./create-commande.component.css']
})
export class CreateCommandeComponent implements OnInit {

  commande:Commande=new Commande();
  constructor(private commandeService:CommandeService,
    private router : Router) { }
  ngOnInit(): void {
    this.commande.client= new Client();
  }


  onSubmit(){
    console.log(this.commande);
    this.saveClient();
  }

  
  saveClient(){
    this.commandeService.createCommande(this.commande).subscribe(data=>{
      console.log(data);
      this.goToCommandeList();
    },
    error => {
      console.error();
      console.log(error.status);
      if(error.status == 404 ){
        alert(`Client avec id : {${this.commande.client.id}} n'existe pas`);
      }
    }
    )
  }


  goToCommandeList(){
    this.router.navigate(['/commandes']);
  }
}
