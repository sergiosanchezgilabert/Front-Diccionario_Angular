import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuscadorComponent } from './dialog-buscador.component';

describe('DialogBuscadorComponent', () => {
  let component: DialogBuscadorComponent;
  let fixture: ComponentFixture<DialogBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBuscadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
