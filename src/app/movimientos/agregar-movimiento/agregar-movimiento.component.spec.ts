import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMovimientoComponent } from './agregar-movimiento.component';

describe('AgregarMovimientoComponent', () => {
  let component: AgregarMovimientoComponent;
  let fixture: ComponentFixture<AgregarMovimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarMovimientoComponent]
    });
    fixture = TestBed.createComponent(AgregarMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
