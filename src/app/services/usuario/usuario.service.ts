import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(protected http: HttpClient) { }
  obtenerusuario(): Observable<any> {
    let ruta = [environment.apiUrl, 'usuario'].join('/');
    return this.http.get(ruta);
  }
  obtenerusuarioId(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'usuario', id].join('/');
    return this.http.get(ruta);
  }
  agregarusuario(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'usuario'].join('/');
    return this.http.post(ruta, usr);
  }
  editarusuario(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'usuario', id].join('/');
    return this.http.put(ruta, usr);
  }
  eliminarRegistrousuario(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'usuario', id].join('/');
    return this.http.delete(ruta);
  }
}
