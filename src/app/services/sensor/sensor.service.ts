import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(protected http: HttpClient) { }
  obtenersensor(): Observable<any> {
    let ruta = [environment.apiUrl, 'sensor'].join('/');
    return this.http.get(ruta);
  }
  obtenersensorId(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'sensor', id].join('/');
    return this.http.get(ruta);
  }
  agregarsensor(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'sensor'].join('/');
    return this.http.post(ruta, usr);
  }
  editarsensor(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'sensor', id].join('/');
    return this.http.put(ruta, usr);
  }
  eliminarRegistrosensor(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'sensor', id].join('/');
    return this.http.delete(ruta);
  }
}
