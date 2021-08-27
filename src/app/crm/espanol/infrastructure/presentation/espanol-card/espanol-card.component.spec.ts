import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspanolCardComponent } from './espanol-card.component';

describe('EspanolCardComponent', () => {
  let component: EspanolCardComponent;
  let fixture: ComponentFixture<EspanolCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspanolCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspanolCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
