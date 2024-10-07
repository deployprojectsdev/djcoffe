import { Component, OnInit } from '@angular/core';
import { SensorService } from '../services/sensor/sensor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrar-sensor',
  templateUrl: './borrar-sensor.component.html',
  styleUrls: ['./borrar-sensor.component.scss']
})
export class BorrarSensorComponent implements OnInit {
  is_ok = false;
  is_error = false;
  is_empty = false;

  sensor = {
    tipo: '',
    marca_modelo: '',
   fecha_instalacion: '',
    id_cultivo: ''
  };
  private sensorId: string | null = null;

  constructor(
    private sensorService: SensorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sensorId = this.route.snapshot.paramMap.get('id');
    if (this.sensorId) {
      this.cargarSensor();
    }
  }

  cargarSensor(): void {
    if (this.sensorId) {
      this.sensorService.obtenersensorId({ id: this.sensorId }).subscribe({
        next: (data) => {
          this.sensor = data;
          console.log('Datos del sensor cargados:', data);
        },
        error: (err) => {
          console.error('Error al cargar el sensor:', err);
        }
      });
    }
  }

  borrarSensor(): void {
    if (this.sensorId) {
      this.sensorService.eliminarRegistrosensor( this.sensorId).subscribe({
        next: (data) => {
          this.is_ok = true;
          this.is_error = false;
          this.is_empty = false;
          setTimeout(() => {
            this.router.navigate(['dashboard/sensor']);
          }, 2000); // Redirigir después de 2 segundos
          console.log('Sensor eliminado exitosamente:', data);
        },
        error: (err) => {
          this.is_ok = false;
          this.is_error = true;
          this.is_empty = false;
          console.error('No se puede eliminar el sensor porque tiene datos relacionados:', err);
        }
      });
    } else {
      this.is_ok = false;
      this.is_error = false;
      this.is_empty = true;
      console.log('ID del sensor no encontrado');
    }
  }

  goBack(): void {
    this.router.navigate(['dashboard/sensor']);
  }



}
