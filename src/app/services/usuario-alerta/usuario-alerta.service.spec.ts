import { TestBed } from '@angular/core/testing';

import { UsuarioAlertaService } from './usuario-alerta.service';

describe('UsuarioAlertaService', () => {
  let service: UsuarioAlertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioAlertaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
