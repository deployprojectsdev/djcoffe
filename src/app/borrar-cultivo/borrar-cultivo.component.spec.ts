import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarCultivoComponent } from './borrar-cultivo.component';

describe('BorrarCultivoComponent', () => {
  let component: BorrarCultivoComponent;
  let fixture: ComponentFixture<BorrarCultivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarCultivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarCultivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
