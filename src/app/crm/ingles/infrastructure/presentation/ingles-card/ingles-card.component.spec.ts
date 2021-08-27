import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InglesCardComponent } from './ingles-card.component';

describe('InglesCardComponent', () => {
  let component: InglesCardComponent;
  let fixture: ComponentFixture<InglesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InglesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InglesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
