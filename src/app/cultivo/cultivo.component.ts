import { Component, OnInit } from '@angular/core';
import { CultivoService } from '../services/cultivo/cultivo.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cultivo',
  templateUrl: './cultivo.component.html',
  styleUrls: ['./cultivo.component.scss']
})
export class CultivoComponent implements OnInit {
  public cultivo: any;
  modoEdicion: boolean = false;
  constructor(
    private cs: CultivoService,
    private router: Router
  ) { }

  ngOnInit(): void {

    const rol = localStorage.getItem('rol');
    let cultivosObservable: Observable<any>;

    if (rol === 'administrador') {
      cultivosObservable = this.cs.obtenercultivo();
    }else if(rol === 'agricultor'){
      cultivosObservable = this.cs.obtenerCultivosByUserID()
    }else{
      console.error('Rol de usuario no reconocido');
    }
    

    cultivosObservable.subscribe(
      {
        next: (data => {
          this.cultivo = data;
          console.log(data);
        }),
        error: (err => err)
      }
    );
  }
  crearCultivo(): void {
    this.router.navigate(['dashboard/crear-cultivo'])
  }

  toggleModoEdicion(): void {
    this.modoEdicion = !this.modoEdicion;
  }

}
