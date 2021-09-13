import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { DialogInglesComponent } from './dialog-ingles.component';

describe('DialogInglesComponent', () => {
  let component: DialogInglesComponent;
  let fixture: ComponentFixture<DialogInglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogInglesComponent],
      imports: [MatDialogModule,ReactiveFormsModule,MaterialModule,BrowserAnimationsModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        { 
          provide: MAT_DIALOG_DATA, 
          useValue: {} 
        },
        {
          provide: HttpClient,
          useValue: {}
        }
      ],
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
