import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { ApiService } from 'src/app/api/api.service';
import { MensajeService } from '../../services/mensaje.service';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.css']
})
export class ListadoEmpleadosComponent implements OnInit {
      datos: any[] = [];
      datosResponse: any;

      constructor(private apiService: ApiService, private mensaje: MensajeService) { }

      ngOnInit() {
        this.apiService.getEmpleados().subscribe((data: any) => {
          this.datos = data.results[0];
          console.log(data.results[0]);
        });
      }

      generarPDF(row: any) {
        if(row.fechaSeleccionada != null || row.fechaSeleccionada != undefined){

          const fecha = new Date(row.fechaSeleccionada);

          const año = fecha.getFullYear();
          const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
          const dia = fecha.getDate().toString().padStart(2, '0');
  
          const formatoFecha = `${año}-${mes}-${dia}`;

          const datosJSON = {
            numeroEmpleado: row.numeroEmpleado,
            fecha: formatoFecha
          };
        console.log(datosJSON);
        this.apiService.ObtenerNomina(JSON.stringify(datosJSON)).subscribe(response => {
          if(response.results[0].length == 0){
            this.mensaje.showError("No existen movimientos por fecha o no se han dado de alta", "Error");
            return;
          }
          else{
            
            let resultado = response.results[0][0];
            
            //console.log(datos);
            // Crear un nuevo documento PDF
            const doc = new jsPDF();

            // cuerpo del pdf
            const content = `Nomina Rinku
                Empleado: ${resultado.Nombre}
                Rol del empleado: ${resultado.Rol}
                Su sueldo con fecha de ${resultado.fecha} es de:
                Sueldo base: +${resultado.SueldoBaseMensual}
                bonos: +${resultado.BonoMensual}
                vale +${resultado.ValeDespensa}
                bono por entrega: +${resultado.BonoPorEntrega}
                retención ISR: -${resultado.RetencionImpuestos}
                sueldo total mensual: +${resultado.SueldoTotalMensual}`;

            // se divide en líneas
            const lines = doc.splitTextToSize(content, 180);

            // centrar página
            const textHeight = lines.length * 10;
            const pageHeight = doc.internal.pageSize.height;
            const margin = (pageHeight - textHeight) / 2;

            // agregar todo al documento
            doc.text(lines, 15, margin);

            // guardar pdf
            doc.save('nomina.pdf');

            this.mensaje.showSuccess("Nómina generada correctamente","OK"); 
              }
        });
        }
        else{
          this.mensaje.showError("Favor de seleccionar una fecha para el empleado seleccionado", "Error");
        }

      }
}
