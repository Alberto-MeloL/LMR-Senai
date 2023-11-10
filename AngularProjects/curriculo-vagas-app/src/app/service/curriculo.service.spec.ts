import { TestBed } from '@angular/core/testing';

import { CurriculoService } from'./curriculo.service';

describe('VagasService', () => {
    let service: CurriculoService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(CurriculoService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
  