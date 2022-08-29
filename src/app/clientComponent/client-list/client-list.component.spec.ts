import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

import { ClientComponentComponent } from './client-list.component';

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
    const heHtmlEleme : HTMLHeadElement= h2elem.nativeElement;
    expect(heHtmlEleme.textContent).toBe('Client List');
  });

  it('Should be one table on the page', () => {
    const buttons = fixture.debugElement.queryAll(By.css('table'));
    //debugger;
    expect(buttons.length ==1).toBeTruthy();
  });

  xit('Should contain update button tag',()=>{
    const h2elem = fixture.debugElement.queryAll(By.css('button'));
    //debugger;
    const heHtmlEleme : HTMLButtonElement= h2elem[0].nativeElement;
    expect(heHtmlEleme.textContent).toBe('Update');
  });

  xit('Should contain delete button tag',()=>{
    const h2elem = fixture.debugElement.queryAll(By.css('button'));
    //debugger;
    const heHtmlEleme : HTMLButtonElement= h2elem[0].nativeElement;
    expect(heHtmlEleme.textContent).toBe('Delete');
  });

  xit('Should contain details button tag',()=>{
    const h2elem = fixture.debugElement.queryAll(By.css('button'));
    //debugger;
    const heHtmlEleme : HTMLButtonElement= h2elem[0].nativeElement;
    expect(heHtmlEleme.textContent).toBe('Details');
  });

  it('Should navigate to /clients before button click',
      () => {
        const location = TestBed.get(Location);
        expect(location.path()).toBe('/clients');
      }
    );
});

class ClientServiceMock{
  getTotalClients(): Observable<number>{
    return new Observable<number>;
  }
  getClientsListPage(numPage:Number, nbrElement:Number): Observable<Client[]>{
    return new Observable<Client[]>;
  }
}