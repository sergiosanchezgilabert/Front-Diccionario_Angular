import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EspanolService } from 'src/app/crm/espanol/infrastructure/service/espanol-service';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { InglesCardComponent } from './ingles-card.component';

describe('InglesCardComponent', () => {
  let component: InglesCardComponent;
  let fixture: ComponentFixture<InglesCardComponent>;

  const serviceStub = {
    getObservable: () => { return {subscribe: () => {}}; },
  };
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InglesCardComponent ],
      imports:[HttpClientTestingModule,HttpClientModule,MaterialModule,MatDialogModule,RouterModule.forRoot([])],
      providers: [
        {
          provide:DatePipe,
          useValue:{}
        },
        {
          provide:EspanolService,
          useValue:serviceStub
        }
     ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InglesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(serviceStub, 'getObservable').and.returnValue({subscribe: () => {}});
  expect(component).toBeTruthy();
  });
});
