import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';


import { InglesListaComponent } from './ingles-lista.component';

describe('InglesListaComponent', () => {
  let component: InglesListaComponent;
  let fixture: ComponentFixture<InglesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InglesListaComponent ],
      imports:  [      MatDialogModule,MaterialModule,
        HttpClientTestingModule], 
        providers: [
          {
            provide: DatePipe,
            useValue: {}
          },
          {
            provide: Router,
            useValue: {}
          }
        ]})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InglesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create the app',()=>{
    const fixture=TestBed.createComponent(InglesListaComponent)
    const app=fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })
});
