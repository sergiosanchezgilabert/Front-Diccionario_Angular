import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/service/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  nombre: string | null = ''

  usuario: string | null = ''

  foto: string | null=''

  logueado = false

  constructor(private router: Router,private serviceLogin:LoginService) {
    if (localStorage.getItem('ACCESS_TOKEN') !== null) {
      this.logueado = true
    }
    else {
      this.logueado = false
    }

    if (localStorage.getItem('nombre') !== undefined && localStorage.getItem('usuario') !== undefined) {
      this.nombre = localStorage.getItem('nombre')
      this.usuario = localStorage.getItem('usuario')
      this.foto=localStorage.getItem('foto_perfil')
    }
  }

  ngOnInit() {
  }

  logout() {
    this.logueado = false
    this.serviceLogin.logout()
    localStorage.removeItem('nombre')
    localStorage.removeItem('usuario')
    localStorage.removeItem('foto_perfil')
    this.router.navigate([''])
  }
}
