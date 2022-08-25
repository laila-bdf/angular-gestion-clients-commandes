import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '../client';
import { ClientService } from '../services/client.service';

import { UpdateClientComponent } from './update-client.component';

describe('UpdateClientComponent', () => {
  let component: UpdateClientComponent;
  let fixture: ComponentFixture<UpdateClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClientComponent ],
      providers:[{provide:ClientService, useClass:ClientServiceMock}],
      imports:[
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class ClientServiceMock {
  getClientById(id:Number):Observable<Client>{
    return new Observable<Client>;
  }
}