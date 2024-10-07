import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  is_ok = false;
  is_error = false;
  is_empty = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  onSignIn() {
    this.router.navigate(['inicio-sesion'], { relativeTo: this.route.parent });
  }

  crearUsuario(event: Event): void {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement;
    const nombre = (form.querySelector('#inputFirstName') as HTMLInputElement).value;
    const apellido = (form.querySelector('#inputLastName') as HTMLInputElement).value;
    const identificacion = (form.querySelector('#inputCedula') as HTMLInputElement).value;
    const email = (form.querySelector('#inputEmailAddress') as HTMLInputElement).value;
    const contrasena = (form.querySelector('#inputPassword') as HTMLInputElement).value;

    if (nombre.length !== 0 &&
        apellido.length !== 0 &&
        identificacion.length !== 0 &&
        email.length !== 0 &&
        contrasena.length !== 0) {

      this.usuarioService.agregarusuario({ nombre, apellido, identificacion, email, contrasena }).subscribe({
        next: (data => {
          this.is_ok = true;
          this.is_error = false;
          this.is_empty = false;
          console.log(data);
          this.router.navigate(['/inicio-sesion']);
        }),
        error: (error => {
          this.is_error = true;
          this.is_ok = false;
          this.is_empty = false;
          console.log(error);
        })
      });

    } else {
      this.is_empty = true;
      this.is_error = false;
      this.is_ok = false;
    }
  }
}
