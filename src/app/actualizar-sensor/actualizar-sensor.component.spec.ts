import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSensorComponent } from './actualizar-sensor.component';

describe('ActualizarSensorComponent', () => {
  let component: ActualizarSensorComponent;
  let fixture: ComponentFixture<ActualizarSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarSensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
