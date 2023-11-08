import { Component } from '@angular/core';
import { Movimientos } from './agregar-movimiento.model';
import { MensajeService } from 'src/app/services/mensaje.service';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-agregar-movimiento',
  templateUrl: './agregar-movimiento.component.html',
  styleUrls: ['./agregar-movimiento.component.css']
})
export class AgregarMovimientoComponent {

  movimiento: Movimientos = new Movimientos();

  constructor(private mensaje : MensajeService, private apiService : ApiService) { }

  onSubmit() {
    if(this.movimiento.fecha == undefined || this.movimiento.numeroEmpleado == "" 
    || this.movimiento.cantidadEntregas == 0){
        this.mensaje.showError("Favor de llenar toda la información", "Error");
    }
    else if(/^[0-9]+$/.test(this.movimiento.numeroEmpleado) == false){
      this.mensaje.showError("Favor de ingresar valores númericos en número de empleado", "Error");
    }
    else{
      console.log(JSON.stringify(this.movimiento));
      const fecha = new Date(this.movimiento.fecha);

      const año = fecha.getFullYear();
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const dia = fecha.getDate().toString().padStart(2, '0');

      const formatoFecha = `${año}-${mes}-${dia}`;
      let datosJSON = {
        "fecha":formatoFecha,
        "numeroEmpleado":this.movimiento.numeroEmpleado.toString(),
        "movimientos":this.movimiento.cantidadEntregas.toString()

      }
      this.apiService.InsertarMovimiento(datosJSON).subscribe(response => {
        this.mensaje.showSuccess("Movimiento agregado correctamente","OK");
        window.location.reload();
      });
    }
    // se limpia form
    this.movimiento = new Movimientos();
  }

  onCancel() {
    //se limpia form
    this.movimiento = new Movimientos();
  }

}
