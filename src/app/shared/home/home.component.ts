import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLinkActive } from '@angular/router';
import { LoginService } from 'src/app/auth/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  logueado = false

  constructor(private router: Router, private serviceLogin: LoginService) {

  }

  ngOnInit(): void {

    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
    if (localStorage.getItem('username') !== null && localStorage.getItem('password') !== null) {
      var username = localStorage.getItem('username')
      var password = localStorage.getItem('password')
      this.serviceLogin.getPersona(username, password).subscribe(then => {
        if (then !== null) {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Bienvenido',
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
    }
  }

  ingles() {
    this.router.navigateByUrl('ingles');
  }

  espanol() {
    this.router.navigateByUrl('espanol');
  }

  login() {
    this.router.navigateByUrl('');
  }

}
