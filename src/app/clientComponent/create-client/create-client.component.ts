import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  client:Client=new Client();
  constructor(private clientService:ClientService,
    private router : Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.client);
    this.saveClient();
  }

  
  saveClient(){
    this.clientService.createClient(this.client).subscribe(data=>{
      console.log(data);
      this.goToClientList();
    },
    erroe => console.error()
    )
  }

  goToClientList(){
    this.router.navigate(['/clients']);
  }
}
