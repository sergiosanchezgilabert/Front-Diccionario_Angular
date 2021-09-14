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
    name: ['',[Validators.required,Validators.maxLength(10)]],
    surname: ['', [Validators.required,Validators.maxLength(12)]]
  })

  @Output() submitEM = new EventEmitter();

  constructor(private router: Router, private serviceLogin: LoginService,public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      localStorage.setItem('username', this.form.get('username')?.value);
      localStorage.setItem('password', this.form.get('password')?.value);
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
          localStorage.setItem('username', resp.user);
          localStorage.setItem('password', resp.password);
          this.router.navigate(['home']);
        }
      )
    }
  }

}
