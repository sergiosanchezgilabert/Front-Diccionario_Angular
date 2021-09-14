import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { LoginService } from 'src/app/auth/service/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  showFiller = false;

  showIngles = false;

  constructor(private router: Router, private serviceLogin: LoginService) { }

  logueado = false

  ngOnInit(): void {

    if (localStorage.getItem('username') !== null && localStorage.getItem('password') !== null) {
      var username = localStorage.getItem('username')
      var password = localStorage.getItem('password')
      console.log(username + ' ' + password)
      this.serviceLogin.getPersona(username, password).subscribe(then => {
        if (then !== null) {
          this.logueado = true
          console.log(then + 'Hola')
        }

      })
    }

  }

  inglesOn() {
    this.router.navigate(['ingles']);
  }

  espanolOn() {
    this.router.navigate(['espanol']);
  }

  inicio() {
    this.router.navigate(['home']);
  }

  logout() {
    this.logueado = false
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    this.router.navigate(['']);
  }

}
