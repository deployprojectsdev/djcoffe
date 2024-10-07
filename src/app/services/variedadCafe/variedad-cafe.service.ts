import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VariedadCafeService {

  constructor(protected http: HttpClient) { }
  obtenervariedad_cafe(): Observable<any> {
    let ruta = [environment.apiUrl, 'variedad_cafe'].join('/');
    return this.http.get(ruta);
  }
  obtenervariedad_cafeId(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'variedad_cafe', id].join('/');
    return this.http.get(ruta);
  }
  agregarvariedad_cafe(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'variedad_cafe'].join('/');
    return this.http.post(ruta, usr);
  }
  editarvariedad_cafe(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'variedad_cafe', id].join('/');
    return this.http.put(ruta, usr);
  }
  eliminarRegistrovariedad_cafe(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'variedad_cafe', id].join('/');
    return this.http.delete(ruta);
  }
}
