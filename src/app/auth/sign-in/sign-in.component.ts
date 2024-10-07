import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginError: string = '';

  @ViewChild('identificacionInput') identificacionInput!: ElementRef;
  @ViewChild('contrasenaInput') contrasenaInput!: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Lógica adicional si es necesario
  }

  onSubmit(): void {
    const identificacion = (this.identificacionInput.nativeElement as HTMLInputElement).value;
    const contrasena = (this.contrasenaInput.nativeElement as HTMLInputElement).value;

    if (!identificacion || !contrasena) {
      this.loginError = 'Por favor, complete todos los campos.';
      return;
    }

    this.authService.login(identificacion, contrasena).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['dashboard/default']);
      },
      error => {
        this.loginError = 'Error de autenticación.';
      }
    );
  }

  onForgotpassword(): void {
    this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
  }

  onSignup(): void {
    this.router.navigate(['registro']);
  }
}
