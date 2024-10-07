import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSensorComponent } from './crear-sensor.component';

describe('CrearSensorComponent', () => {
  let component: CrearSensorComponent;
  let fixture: ComponentFixture<CrearSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
