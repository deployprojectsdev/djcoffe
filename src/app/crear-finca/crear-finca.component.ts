import { Component, OnInit } from '@angular/core';
import { FincaService } from '../services/finca/finca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-finca',
  templateUrl: './crear-finca.component.html',
  styleUrls: ['./crear-finca.component.scss']
})
export class CrearFincaComponent implements OnInit {
  is_ok = false;
  is_error = false;
  is_empty = false;

  finca = {
    nombre: '',
    ubicacion: '',
    area_total: '',
    telefono: '',
    observaciones: '',
    id_usuario: ''
  };

  constructor(
    private router: Router,
    private fincaService: FincaService
  ) { }

  ngOnInit(): void {
    // Obtener el id_usuario del localStorage al inicializar el componente
    this.finca.id_usuario = localStorage.getItem('id') || '';
  }

  crearFinca() {
    console.log('Datos de la finca a crear:', this.finca);
    if (this.finca.nombre && this.finca.ubicacion && this.finca.area_total && this.finca.telefono && this.finca.id_usuario) {
      this.fincaService.agregarFinca(this.finca).subscribe({
        next: (data) => {
          this.is_ok = true;
          this.is_error = false;
          this.is_empty = false;
          console.log('Finca creada exitosamente:', data);
        },
        error: (err) => {
          this.is_ok = false;
          this.is_error = true;
          this.is_empty = false;
          console.error('Error al crear la finca:', err);
        }
      });
    } else {
      this.is_ok = false;
      this.is_error = false;
      this.is_empty = true;
      console.log('Faltan datos requeridos');
    }
  }

  goBack(): void {
    this.router.navigate(['dashboard/finca']);
  }
}