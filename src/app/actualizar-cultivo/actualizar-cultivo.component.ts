import { Component, OnInit } from '@angular/core';
import { CultivoService } from '../services/cultivo/cultivo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-cultivo',
  templateUrl: './actualizar-cultivo.component.html',
  styleUrls: ['./actualizar-cultivo.component.scss']
})
export class ActualizarCultivoComponent implements OnInit {
  is_ok = false;
  is_error = false;
  is_empty = false;

  cultivo = {
    nombre: '',
   fecha_siembra: '',
   fecha_cosecha_estimada: '',
    id_finca: ''
  };

  private cultivoId: string | null = null;
  constructor(
    private cultivoService: CultivoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cultivoId = this.route.snapshot.paramMap.get('id');
    if (this.cultivoId) {
      this.cargarCultivo();
    }
  }
  cargarCultivo() {
    if (this.cultivoId) {
      this.cultivoService.obtenercultivoId({ id: this.cultivoId }).subscribe({
        next: (data) => {
          this.cultivo = data;
          console.log('Datos del cultivo cargados:', data);
        },
        error: (err) => {
          console.error('Error al cargar el cultivo:', err);
        }
      });
    }
  }
  actualizarCultivo(): void {
    if (this.cultivoId) {
      this.cultivoService.editarcultivo(this.cultivo, this.cultivoId).subscribe({
        next: (data) => {
          this.is_ok = true;
          this.is_error = false;
          this.is_empty = false;
          setTimeout(() => {
            this.router.navigate(['dashboard/cultivo']);
          }, 2000); // Redirigir después de 2 segundos
          console.log('Cultivo actualizada exitosamente:', data);
        },
        error: (err) => {
          this.is_ok = false;
          this.is_error = true;
          this.is_empty = false;
          console.error('Error al actualizar el cultivo:', err);
        }
      });
    } else {
      this.is_ok = false;
      this.is_error = false;
      this.is_empty = true;
      console.log('ID de cultivo no encontrado');
    }
  }

  goBack(): void {
    this.router.navigate(['dashboard/cultivo']);
  }

}
