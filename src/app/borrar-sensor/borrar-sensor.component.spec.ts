import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarSensorComponent } from './borrar-sensor.component';

describe('BorrarSensorComponent', () => {
  let component: BorrarSensorComponent;
  let fixture: ComponentFixture<BorrarSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarSensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
