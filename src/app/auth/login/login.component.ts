import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({
    username: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
    password: ['', Validators.required]
  })

  formRegistro: FormGroup = this.fb.group({
    username: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
    password: ['', [Validators.required,Validators.minLength(6)]],
    repitePassword:['', [Validators.required,Validators.minLength(6)]],
    name: ['',[Validators.required]],
    surname: ['', [Validators.required]]
  })

  logueado=false

  @Output() submitEM = new EventEmitter();

  constructor(private router: Router, private serviceLogin: LoginService,public fb: FormBuilder) { 
    if(localStorage.getItem('logueado')!==null){
      this.logueado=true
    }
  }

  ngOnInit(): void { }

  submit() {
    if (this.form.valid) {
      localStorage.setItem('username', this.form.get('username')?.value)
      localStorage.setItem('password', this.form.get('password')?.value)
      localStorage.setItem('logueado', 'true')
      var username = localStorage.getItem('username')
      var password = localStorage.getItem('password')
      this.serviceLogin.getPersona(username, password).subscribe(then => {
        if (then !== null) {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Bienvenido '+then.user,
            showConfirmButton: false,
            timer: 1500
          })
          this.logueado = true
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error de login!',

          })
        }
      })
      this.router.navigate(['home']);
    }
  }

  submitReg() {
    if (this.formRegistro.valid) {
      var username = this.formRegistro.get('username')?.value
      var password = this.formRegistro.get('password')?.value
      var repitePassword= this.formRegistro.get('repitePassword')?.value
      var name = this.formRegistro.get('name')?.value
      var surname = this.formRegistro.get('surname')?.value
      if(password==repitePassword){

        this.serviceLogin.setPersona(name, surname, username, password).subscribe(
          resp => {
            this.logueado=true
            localStorage.setItem('username', resp.user);
            localStorage.setItem('password', resp.password);
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Registrado !',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['home']);
          }
        )
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Registro erroneo!'
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Las contraseñas no son iguales :(!'
        })
      }
    }
  }

  home(){
    this.router.navigateByUrl('home');
  }

}
