import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEspanolComponent } from './dialog-espanol.component';

describe('DialogEspanolComponent', () => {
  let component: DialogEspanolComponent;
  let fixture: ComponentFixture<DialogEspanolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEspanolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEspanolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
