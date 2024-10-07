import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCultivoComponent } from './actualizar-cultivo.component';

describe('ActualizarCultivoComponent', () => {
  let component: ActualizarCultivoComponent;
  let fixture: ComponentFixture<ActualizarCultivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCultivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarCultivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
