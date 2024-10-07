import { Component, OnInit } from '@angular/core';
import { FincaService } from '../services/finca/finca.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-finca',
  templateUrl: './actualizar-finca.component.html',
  styleUrls: ['./actualizar-finca.component.scss']
})
export class ActualizarFincaComponent implements OnInit {
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

  private fincaId: string | null = null;

  constructor(
    private fincaService: FincaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fincaId = this.route.snapshot.paramMap.get('id');
    if (this.fincaId) {
      this.cargarFinca();
    }
  }

  cargarFinca(): void {
    if (this.fincaId) {
      this.fincaService.obtenerFincaId({ id: this.fincaId }).subscribe({
        next: (data) => {
          this.finca = data;
          console.log('Datos de la finca cargados:', data);
        },
        error: (err) => {
          console.error('Error al cargar la finca:', err);
        }
      });
    }
  }

  actualizarFinca(): void {
    if (this.fincaId) {
      this.fincaService.editarFinca(this.finca, this.fincaId).subscribe({
        next: (data) => {
          this.is_ok = true;
          this.is_error = false;
          this.is_empty = false;
          setTimeout(() => {
            this.router.navigate(['dashboard/finca']);
          }, 2000); // Redirigir después de 2 segundos
          console.log('Finca actualizada exitosamente:', data);
        },
        error: (err) => {
          this.is_ok = false;
          this.is_error = true;
          this.is_empty = false;
          console.error('Error al actualizar la finca:', err);
        }
      });
    } else {
      this.is_ok = false;
      this.is_error = false;
      this.is_empty = true;
      console.log('ID de finca no encontrado');
    }
  }

  goBack(): void {
    this.router.navigate(['dashboard/finca']);
  }
}
