import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(identificacion: string, contrasena: string, email?: string): Observable<any> {
    const payload: any = { contrasena };
    if (identificacion) payload.identificacion = identificacion;
    if (email) payload.email = email;

    return this.http.post<any>('http://localhost:3000/usuario/auth', payload).pipe(
      tap(response => {
        console.log('Respuesta del servidor:', response);
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
        if (response.nombre && response.id && response.rol) {
          this.setDataUsuario(response.nombre, response.id, response.rol);
        }
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  setDataUsuario(nombre: string, id: string, rol: string): void {
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('id', id);
    localStorage.setItem('rol', rol);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    localStorage.removeItem('id');
    localStorage.removeItem('rol');
  }
}
