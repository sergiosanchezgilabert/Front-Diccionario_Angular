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
    if(localStorage.getItem('logueado')!==null){
      this.logueado=true
    }
  }

  ngOnInit(): void {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
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
