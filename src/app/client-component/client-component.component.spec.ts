import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '../client';
import { ClientService } from '../client.service';

import { ClientComponentComponent } from './client-component.component';

describe('ClientComponentComponent', () => {
  let component: ClientComponentComponent;
  let fixture: ComponentFixture<ClientComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientComponentComponent ],
      providers:[
        {provide:ClientService, useClass:ClientServiceMock},
      ],
      imports:[
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should contain h2 tag',()=>{
    const h2elem = fixture.debugElement.query(By.css('h2'));
    // debugger;
    expect(h2elem.nativeElement.textContent).toBe('Client List');
  })
});

class ClientServiceMock{
  getTotalClients(): Observable<number>{
    return new Observable<number>;
  }
  getClientsListPage(numPage:Number, nbrElement:Number): Observable<Client[]>{
    return new Observable<Client[]>;
  }
}