import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id!:Number;
  client:Client=new Client();
  
  constructor(private clientService: ClientService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.clientService.getClientById(this.id).subscribe(data=>{
      this.client=data;
    },
    erroe=>console.error()
    
      );
  }

  onSubmit(){
    this.clientService.updateClient(this.id,this.client).subscribe(data=>
      this.goToClientList(), erroe=>console.error()
      );
  }
  
  goToClientList(){
    this.router.navigate(['/clients']);
  }
}
