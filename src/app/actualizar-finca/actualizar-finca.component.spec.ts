import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarFincaComponent } from './actualizar-finca.component';

describe('ActualizarFincaComponent', () => {
  let component: ActualizarFincaComponent;
  let fixture: ComponentFixture<ActualizarFincaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarFincaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarFincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
