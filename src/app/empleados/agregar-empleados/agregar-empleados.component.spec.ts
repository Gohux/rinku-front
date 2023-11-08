import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEmpleadosComponent } from './agregar-empleados.component';

describe('AgregarEmpleadosComponent', () => {
  let component: AgregarEmpleadosComponent;
  let fixture: ComponentFixture<AgregarEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEmpleadosComponent]
    });
    fixture = TestBed.createComponent(AgregarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
