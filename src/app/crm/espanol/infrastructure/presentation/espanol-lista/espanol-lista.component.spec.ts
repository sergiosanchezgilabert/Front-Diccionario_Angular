import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { EspanolListaComponent } from './espanol-lista.component';

describe('EspanolListaComponent', () => {
  let component: EspanolListaComponent;
  let fixture: ComponentFixture<EspanolListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspanolListaComponent ],
      imports: [      MatDialogModule,MaterialModule,
        HttpClientTestingModule],
        providers: [
          {
            provide: DatePipe,
            useValue: {}
          },
          {
            provide:Router,
            useValue:{}
          }
       ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspanolListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
