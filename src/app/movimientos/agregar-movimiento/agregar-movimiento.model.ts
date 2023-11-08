export class Movimientos {
    numeroEmpleado: string;
    nombre: string;
    rol: string;
    fecha: Date;
    cantidadEntregas: number;

    constructor() {
        this.numeroEmpleado = '';
        this.nombre = '';
        this.fecha = new Date();
        this.rol = 'chofer';
        this.cantidadEntregas = 0
      }
  }