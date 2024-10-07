import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturaSensorComponent } from './lectura-sensor.component';

describe('LecturaSensorComponent', () => {
  let component: LecturaSensorComponent;
  let fixture: ComponentFixture<LecturaSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturaSensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturaSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
