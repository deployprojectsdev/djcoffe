import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariedadCafeComponent } from './variedad-cafe.component';

describe('VariedadCafeComponent', () => {
  let component: VariedadCafeComponent;
  let fixture: ComponentFixture<VariedadCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariedadCafeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariedadCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
