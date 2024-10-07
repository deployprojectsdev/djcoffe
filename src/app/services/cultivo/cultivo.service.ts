import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CultivoService {

  constructor(protected http: HttpClient) { }
  obtenercultivo(): Observable<any> {
    let ruta = [environment.apiUrl, 'cultivo'].join('/');
    return this.http.get(ruta);
  }
  obtenercultivoId(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'cultivo', id].join('/');
    return this.http.get(ruta);
  }
  agregarcultivo(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'cultivo'].join('/');
    return this.http.post(ruta, usr);
  }
  editarcultivo(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'cultivo', id].join('/');
    return this.http.put(ruta, usr);
  }
  eliminarRegistrocultivo(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'cultivo', id].join('/');
    return this.http.delete(ruta);
  }

  obtenerCultivosByUserID(): Observable<any> {
    const id_usuario = localStorage.getItem('id');  // Obtener el id del usuario desde el localStorage
    if (!id_usuario) {
      throw new Error('No se ha iniciado sesión');
    }

    const ruta = [environment.apiUrl,'cultivo','usuario',id_usuario].join('/');
    return this.http.get(ruta).pipe(
      catchError((error) => {
        console.error('Error al obtener los cultivos:', error);
        return throwError('Ocurrió un error al obtener los cultivos.');  
      })
    );
  }
}

