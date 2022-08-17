import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl="/api/v1/clients";
  constructor(private httpClient: HttpClient) { }
  
  getClientsListPage(numPage:Number, nbrElement:Number): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}?page=${numPage}&size=${nbrElement}`);
  }

  createClient(client:Client): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,client);
  }
  
  getClientById(id:Number):Observable<Client>{
    return this.httpClient.get<Client>(`${this.baseUrl}/${id}`);
  }

  updateClient(id:Number, client:Client):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,client);
  }

  deleteClient(id:Number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
