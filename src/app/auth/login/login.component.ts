import { Component, EventEmitter, Inject, Injectable, NgZone, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../service/login.service';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

@Injectable()
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
    password: ['', Validators.required]
  })

  formRegistro: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repitePassword: ['', [Validators.required, Validators.minLength(6)]],
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]]
  })

  logueado = false
  public user: SocialUser = new SocialUser;

  constructor(private router: Router, private serviceLogin: LoginService,
    public fb: FormBuilder, private authService: SocialAuthService
  ) {

    if (localStorage.getItem('logueado') !== null) {
      this.logueado = true
    }
    if (localStorage.getItem('usernameGoogle') !== null) {
      this.logueado = true
    }
  }

  ngOnInit(): void {
  }

  public socialSignIn(socialProvider: string) {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.serviceLogin.getPersonaGoogle(user)
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Bienvenido ' + user.name,
            showConfirmButton: false,
            timer: 1500
          })
          this.logueado = true
          this.router.navigate(['home']);
       
    });
  }

  submit() {
    if (this.form.valid) {
      var username = this.form.get('username')?.value
      var password = this.form.get('password')?.value
      this.serviceLogin.getPersona(username, password).subscribe(then => {
        if (then !== null) {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Bienvenido ' + then.user,
            showConfirmButton: false,
            timer: 1500
          })
          this.logueado = true
          this.router.navigate(['home']);
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error de login!',

          })
        }
      })
    }
  }

  submitReg() {
    if (this.formRegistro.valid) {
      var username = this.formRegistro.get('username')?.value
      var password = this.formRegistro.get('password')?.value
      console.log(username, password)
      var repitePassword = this.formRegistro.get('repitePassword')?.value
      var name = this.formRegistro.get('name')?.value
      var surname = this.formRegistro.get('surname')?.value
      if (password == repitePassword) {

        this.serviceLogin.setPersona(name, surname, username, password).subscribe(
          resp => {
            if (resp) {
              this.logueado = true
              Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Registrado !',
                showConfirmButton: false,
                timer: 1500
              })
              this.router.navigate(['home']);
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Registro erroneo!'
              })
            }
          }
        )
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Las contraseñas no son iguales :(!'
        })
      }
    }
  }

  google() {

  }

  home() {
    this.router.navigateByUrl('home');
  }

}
