import { Component, OnInit } from '@angular/core';
import { FincaService } from '../services/finca/finca.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-finca',
  templateUrl: './finca.component.html',
  styleUrls: ['./finca.component.scss']
})
export class FincaComponent implements OnInit {
  public fincas: any;
  modoEdicion: boolean = false;

  constructor(
    private fs: FincaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarFincas();
  }

  cargarFincas(): void {
    const rol = localStorage.getItem('rol');
    let fincasObservable: Observable<any>;

    if (rol === 'administrador') {
      fincasObservable = this.fs.obtenerFinca();
    } else if (rol === 'agricultor') {
      fincasObservable = this.fs.obtenerFincaIdUsuario();
    } else {
      console.error('Rol de usuario no reconocido');
      return;
    }

    fincasObservable.subscribe({
      next: (data) => {
        this.fincas = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Error al cargar las fincas:', err);
      }
    });
  }

  crearFinca(): void {
    this.router.navigate(['dashboard/crear-finca']);
  }

  editarFinca(finca: any): void {
    // Redirigir a la página de actualización de finca con el ID de la finca
    this.router.navigate(['dashboard/actualizar-finca', finca.id]);
  }

  eliminarFinca(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta finca?')) {
      this.fs.eliminarRegistroFinca(id).subscribe({
        next: () => {
          this.cargarFincas(); // Recargar la lista después de eliminar
          console.log('Finca eliminada exitosamente.');
        },
        error: (err) => {
          console.error('Error al eliminar la finca:', err);
        }
      });
    }
  }

  toggleModoEdicion(): void {
    this.modoEdicion = !this.modoEdicion;
  }
}
