import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Commande } from 'src/app/model/commande';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-update-commande',
  templateUrl: './update-commande.component.html',
  styleUrls: ['./update-commande.component.css']
})
export class UpdateCommandeComponent implements OnInit {

  id!:Number;
  commande:Commande=new Commande();
  
  constructor(private commandeService: CommandeService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.commandeService.getCommandeById(this.id).subscribe(data=>{
      this.commande=data;
    },
    erroe=>console.error()
    );
  }

  onSubmit(){
    this.commandeService.updateCommande(this.id,this.commande).subscribe(data=>
      this.goToCommandeList(), erroe=>console.error()
      );
  }
  
  goToCommandeList(){
    this.router.navigate(['/commandes']);
  }

}
