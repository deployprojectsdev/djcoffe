import { Component, OnInit } from '@angular/core';
import { SensorService } from '../services/sensor/sensor.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {

  public sensor: any;
  modoEdicion: boolean = false;

  constructor(
    private ss: SensorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarSensores();
  }
  

  cargarSensores(): void {
    const rol = localStorage.getItem('rol');
    let sensoresObservable: Observable<any>;

    if (rol === 'administrador') {
      sensoresObservable = this.ss.obtenersensor();
    } else if (rol === 'agricultor') {
      sensoresObservable = this.ss.obtenersensor();
    } else {
      console.error('Rol de usuario no reconocido');
      return;
    }

    sensoresObservable.subscribe({
      next: (data) => {
        this.sensor = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Error al cargar los sensores:', err);
      }
    });
  }

  crearSensor(): void {
    this.router.navigate(['dashboard/crear-sensor']);
  }

  toggleModoEdicion(): void {
    this.modoEdicion = !this.modoEdicion;
  }
}

