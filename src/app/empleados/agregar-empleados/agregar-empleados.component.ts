import { Component } from '@angular/core';
import { Empleado } from './agregar-empleados.model';
import { MensajeService } from '../../services/mensaje.service';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-agregar-empleados',
  templateUrl: './agregar-empleados.component.html',
  styleUrls: ['./agregar-empleados.component.css']
})
export class AgregarEmpleadosComponent {
  empleadoAgregar: Empleado = new Empleado();

  constructor(private mensaje : MensajeService, private apiService : ApiService) { }
  valorSeleccionado: string | undefined;
  onSubmit() {
    //se valida información
    if(this.empleadoAgregar.nombre == "" || this.empleadoAgregar.numeroEmpleado == "" || this.empleadoAgregar.rol == ""){
      this.mensaje.showError("Favor de llenar toda la información", "Error");
    }
    else if(/^[0-9]+$/.test(this.empleadoAgregar.numeroEmpleado) == false){
      this.mensaje.showError("Favor de ingresar valores númericos en número de empleado", "Error");
    }
    else{
      //Si todo correcto, entonces tratar de enviar el empleado
      console.log(JSON.stringify(this.empleadoAgregar));
      this.apiService.InsertarEmpleado(JSON.stringify(this.empleadoAgregar)).subscribe(response => {
        this.mensaje.showSuccess("Empleado agregado correctamente","OK");
        window.location.reload();
      });
    }
    console.log(this.empleadoAgregar);
    //Se limpia formulario
    this.empleadoAgregar = new Empleado();
  }

  onRolChange(value:string){
    console.log(value);
    this.empleadoAgregar.rol = value;
  }
  
  onCancel() {
    //Se limpia formulario
    this.empleadoAgregar = new Empleado();
  }
}
