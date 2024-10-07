import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFincaComponent } from './crear-finca.component';

describe('CrearFincaComponent', () => {
  let component: CrearFincaComponent;
  let fixture: ComponentFixture<CrearFincaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFincaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
