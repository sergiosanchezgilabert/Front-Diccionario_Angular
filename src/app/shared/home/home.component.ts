import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLinkActive } from '@angular/router';
import { LoginService } from 'src/app/auth/service/login.service';

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
          this.logueado = true
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
