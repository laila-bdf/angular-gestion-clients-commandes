import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/model/commande';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande-details',
  templateUrl: './commande-details.component.html',
  styleUrls: ['./commande-details.component.css']
})
export class CommandeDetailsComponent implements OnInit {

  id!:Number;
  commande:Commande = new Commande();
  constructor(private route:ActivatedRoute ,private clientService :CommandeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      this.clientService.getCommandeById(this.id).subscribe(
        data => this.commande=data,
        erroe=>console.error()
      );
  }

}
