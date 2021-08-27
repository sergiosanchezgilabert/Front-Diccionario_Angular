import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspanolListaComponent } from './espanol-lista.component';

describe('EspanolListaComponent', () => {
  let component: EspanolListaComponent;
  let fixture: ComponentFixture<EspanolListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspanolListaComponent ]
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
