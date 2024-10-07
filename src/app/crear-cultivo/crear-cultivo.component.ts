import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CultivoService } from '../services/cultivo/cultivo.service';

@Component({
  selector: 'app-crear-cultivo',
  templateUrl: './crear-cultivo.component.html',
  styleUrls: ['./crear-cultivo.component.scss'],
})
export class CrearCultivoComponent implements OnInit {
  is_ok = false;
  is_error = false;
  is_empty = false;

  cultivo = {
    nombre: '',
    fecha_siembra: '',
    fecha_cosecha_estimada: '',
    id_finca: '',
    estado_cultivo: '',
    area_cultivo: '',
  };

  constructor(private router: Router, private cultivoService: CultivoService) {}

  ngOnInit(): void {}

  crearCultivo() {
    console.log('Datos del cultivo a crear:', this.cultivo);

    if (
      this.cultivo.nombre &&
      this.cultivo.fecha_siembra &&
      this.cultivo.fecha_cosecha_estimada &&
      this.cultivo.id_finca &&
      this.cultivo.estado_cultivo &&
      this.cultivo.area_cultivo
    ) {
      // Conversión de fechas al formato YYYY-MM-DD
      this.cultivo.fecha_siembra = this.formatDate(this.cultivo.fecha_siembra);
      this.cultivo.fecha_cosecha_estimada = this.formatDate(this.cultivo.fecha_cosecha_estimada);

      this.cultivoService.agregarcultivo(this.cultivo).subscribe({
        next: (data) => {
          this.is_ok = true;
          this.is_error = false;
          this.is_empty = false;
          console.log('Cultivo creado exitosamente:', data);
        },
        error: (err) => {
          this.is_ok = false;
          this.is_error = true;
          this.is_empty = false;
          console.error('Error al crear el cultivo:', err);
        },
      });
    } else {
      this.is_ok = false;
      this.is_error = false;
      this.is_empty = true;
      console.log('Faltan datos requeridos');
    }
  }

  formatDate(dateStr: string): string {
    // Si el formato es DD/MM/YYYY, convierte a YYYY-MM-DD
    const [day, month, year] = dateStr.split('/');
    return `${year}-${month}-${day}`;
  }

  goBack(): void {
    this.router.navigate(['dashboard/cultivo']);
  }
}
