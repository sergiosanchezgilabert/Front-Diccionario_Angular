import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InglesService } from './Ingles.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers:[
        {provide:HttpTestingController,useValue:{}}
      ]
    }).compileComponents();
  });

  it('should get users',inject([HttpTestingController, InglesService],
    (httpMock: HttpTestingController, apiService: InglesService) => {
      expect(apiService).toBeTruthy();
    }
  )
  );
});