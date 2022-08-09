import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {

  id!:Number;
  constructor(private clientService :ClientService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.clientService.deleteClient(this.id).subscribe(data=>
      this.goToClientList(), erroe=>console.error())
  }

   
  goToClientList(){
    this.router.navigate(['/clients']);
  }
}
