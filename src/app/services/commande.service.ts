import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../model/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

 
  private baseUrl="/api/v1/commandes";
  constructor(private httpClient: HttpClient) { }
  
  getCommandesPage(numPage:Number, nbrElement:Number): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}?page=${numPage}&size=${nbrElement}`);
  }

  getCommandesByClientId(id : number, numPage:Number, nbrElement:Number) : Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/client/${id}?page=${numPage}&size=${nbrElement}`);
  }
  
  createCommande(commande:Commande): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}`,commande,
    {observe: 'response'});
  }
  
  getCommandeById(id:Number):Observable<Commande>{
    return this.httpClient.get<Commande>(`${this.baseUrl}/${id}`);
  }

  updateCommande(id:Number, commande:Commande):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,commande);
  }

  deleteCommande(id:Number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
