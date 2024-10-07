import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SensorService } from '../services/sensor/sensor.service';

@Component({
  selector: 'app-crear-sensor',
  templateUrl: './crear-sensor.component.html',
  styleUrls: ['./crear-sensor.component.scss']
})
export class CrearSensorComponent implements OnInit {

  is_ok = false;
  is_error = false;
  is_empty = false;

  sensor = {
    tipo: '',
    marca_modelo: '',
    fecha_instalacion: '',
    id_cultivo: '',
    
  };
  constructor(
    private router: Router,
    private sensorService: SensorService
  ) { }

  ngOnInit(): void {
    
  }

  crearSensor() {
    console.log('Datos del sensor a crear:', this.sensor);
    if (this.sensor.tipo && this.sensor.marca_modelo && this.sensor.fecha_instalacion && this.sensor.id_cultivo ) {
      this.sensorService.agregarsensor(this.sensor).subscribe({
        next: (data) => {
          this.is_ok = true;
          this.is_error = false;
          this.is_empty = false;
          console.log('Sensor creado exitosamente:', data);
        },
        error: (err) => {
          this.is_ok = false;
          this.is_error = true;
          this.is_empty = false;
          console.error('Error al crear el sensor:', err);
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
    this.router.navigate(['dashboard/sensor']);
  }
}
