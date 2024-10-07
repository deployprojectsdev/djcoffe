import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAlertaComponent } from './usuario-alerta.component';

describe('UsuarioAlertaComponent', () => {
  let component: UsuarioAlertaComponent;
  let fixture: ComponentFixture<UsuarioAlertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioAlertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
