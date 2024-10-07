import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarFincaComponent } from './borrar-finca.component';

describe('BorrarFincaComponent', () => {
  let component: BorrarFincaComponent;
  let fixture: ComponentFixture<BorrarFincaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarFincaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarFincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
