import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private serviceLogin: LoginService,public fb: FormBuilder) { }

  ngOnInit(): void {
    if (localStorage.getItem('username')!==null && localStorage.getItem('password')!==null) {
      var username = localStorage.getItem('username')
      var password = localStorage.getItem('password')
      this.serviceLogin.getPersona(username, password).subscribe(then => {
        if(then!==null){
          this.logueado = true
        }
      
      })
    }
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      localStorage.setItem('username', this.form.get('username')?.value);
      localStorage.setItem('password', this.form.get('password')?.value);
      this.logueado=true
      this.router.navigate(['home']);
    }
  }

  submitReg() {
    if (this.formRegistro.valid) {
      var username = this.formRegistro.get('username')?.value
      var password = this.formRegistro.get('password')?.value
      var name = this.formRegistro.get('name')?.value
      var surname = this.formRegistro.get('surname')?.value
      this.serviceLogin.setPersona(name, surname, username, password).subscribe(
        resp => {
          this.logueado=true
          localStorage.setItem('username', resp.user);
          localStorage.setItem('password', resp.password);
          this.router.navigate(['home']);
        }
      )
    }
  }

  home(){
    this.router.navigateByUrl('home');
  }

}
