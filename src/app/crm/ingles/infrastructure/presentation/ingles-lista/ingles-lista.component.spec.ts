import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InglesListaComponent } from './ingles-lista.component';

describe('InglesListaComponent', () => {
  let component: InglesListaComponent;
  let fixture: ComponentFixture<InglesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InglesListaComponent ]
    })
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
});
