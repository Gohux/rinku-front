import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarEmpleadosComponent } from './empleados/agregar-empleados/agregar-empleados.component';
import { AgregarMovimientoComponent } from './movimientos/agregar-movimiento/agregar-movimiento.component';
import { ListadoEmpleadosComponent } from './empleados/listado-empleados/listado-empleados.component';

const routes: Routes = [
  { path: 'Agregar-empleado', component: AgregarEmpleadosComponent },
  { path: 'Agregar-movimiento', component: AgregarMovimientoComponent },
  { path: 'Listado-empleados', component: ListadoEmpleadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
