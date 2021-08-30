import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInglesComponent } from './dialog-ingles.component';

describe('DialogInglesComponent', () => {
  let component: DialogInglesComponent;
  let fixture: ComponentFixture<DialogInglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
