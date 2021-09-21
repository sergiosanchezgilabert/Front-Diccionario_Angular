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

  constructor(private router: Router, private serviceLogin: LoginService) {
    if (localStorage.getItem('ACCESS_TOKEN') !== null) {
      this.logueado = true
    }
  }

  logueado = false

  ngOnInit(): void {

  }

  inglesOn() {
    this.router.navigate(['ingles'])
  }

  espanolOn() {
    this.router.navigate(['espanol'])
  }

  inicio() {
    this.router.navigate(['home'])
  }

}
