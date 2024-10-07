import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FincaService {

  constructor(protected http: HttpClient) { }
  obtenerFinca(): Observable<any> {
    let ruta = [environment.apiUrl, 'finca'].join('/');
    return this.http.get(ruta);
  }
  obtenerFincaId({ id }: { id: any; }): Observable<any> {
    let ruta = [environment.apiUrl, 'finca', id].join('/');
    return this.http.get(ruta);
  }
  agregarFinca(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'finca'].join('/');
    return this.http.post(ruta, usr);
  }
  editarFinca(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'finca', id].join('/');
    return this.http.put(ruta, usr);
  }
  eliminarRegistroFinca(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'finca', id].join('/');
    return this.http.delete(ruta);
  }
  obtenerFincaIdUsuario(): Observable<any> {
    const id_usuario = localStorage.getItem('id');
    if (!id_usuario) {
      throw new Error('ID de usuario no encontrado en el local storage');
    }
    let ruta = [environment.apiUrl, 'finca', 'usuario', id_usuario].join('/');
    return this.http.get(ruta);
  }

}
