import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../../model/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id!:Number;
  client:Client = new Client();
  constructor(private route:ActivatedRoute ,private clientService :ClientService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      this.clientService.getClientById(this.id).subscribe(
        data => this.client=data,
        erroe=>console.error()
      );
  }

}
