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
    if (localStorage.getItem('ACCESS_TOKEN') !== null) {
      this.logueado = true
    }
  }

  async ngOnInit(): Promise<void> {
    if (!localStorage.getItem('reload')) {
      localStorage.setItem('reload', 'no reload')
      await new Promise(f => setTimeout(f, 1000));
      location.reload()
    } else {
      localStorage.removeItem('reload')
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
