import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://backnominas.uw.r.appspot.com/api';

  constructor(private http: HttpClient) { }

  getEmpleados() {
    return this.http.get(this.apiUrl + '/empleados/obtener_empleados');
  }

  InsertarEmpleado(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/empleados/insertar_empleado`, data, { headers });
  }

  ObtenerNomina(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/empleados/obtener_nomina`, data, { headers });
  }

  InsertarMovimiento(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/movimientos/insertar_movimiento`, data, { headers });
  }
}