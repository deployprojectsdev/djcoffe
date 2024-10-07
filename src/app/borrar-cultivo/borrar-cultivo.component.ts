import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CultivoService } from '../services/cultivo/cultivo.service';

@Component({
  selector: 'app-borrar-cultivo',
  templateUrl: './borrar-cultivo.component.html',
  styleUrls: ['./borrar-cultivo.component.scss']
})
export class BorrarCultivoComponent implements OnInit {

  is_ok = false;
  is_error = false;
  is_empty = false;

  cultivo = {
    nombre: '', 
    fecha_siembra: '',
    fecha_cosecha_estimada: '', 
    id_finca: '', 
    estado_cultivo: '', 
    area_cultivo: ''
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

  cargarCultivo(): void {
    if (this.cultivoId) {
      this.cultivoService.obtenercultivoId({ id: this.cultivoId }).subscribe({
        next: (data) => {
          this.cultivo = data;
          console.log('Datos de la cultivo cargados:', data);
        },
        error: (err) => {
          console.error('Error al cargar el cultivo:', err);
        }
      });
    }
  }

  borrarCultivo(): void {
    if (this.cultivoId) {
      this.cultivoService.eliminarRegistrocultivo( this.cultivoId).subscribe({
        next: (data) => {
          this.is_ok = true;
          this.is_error = false;
          this.is_empty = false;
          setTimeout(() => {
            this.router.navigate(['dashboard/cultivo']);
          }, 2000); // Redirigir después de 2 segundos
          console.log('Cultivo eliminado exitosamente:', data);
        },
        error: (err) => {
          this.is_ok = false;
          this.is_error = true;
          this.is_empty = false;
          console.error('No se puede eliminar el cultivo porque tiene datos relacionados:', err);
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
