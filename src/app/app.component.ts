import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from './client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  constructor(private clientService: ClientService, private router:Router) {
   
  }
  
  deleteClient(id:Number){
    // this.router.navigate(['delete-client',id])
    this.clientService.deleteClient(id).subscribe(data=>
      this.router.navigate(['/clients'])
     , error=>console.error());

     
  }
}
