import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LecturaSensorService {

  constructor(protected http: HttpClient) { }

  obtenerLecturaSensor(): Observable<any> {
    let ruta = [environment.apiUrl, 'lectura-sensor'].join('/');
    return this.http.get(ruta);
  }

  obtenerLecturaSensorId(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'lectura-sensor', id].join('/');
    return this.http.get(ruta);
  }
}
