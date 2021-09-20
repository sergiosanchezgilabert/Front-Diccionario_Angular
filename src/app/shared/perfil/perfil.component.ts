import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  nombre: string | null = ''

  usuario: string | null = ''

  logueado = false

  constructor(private router: Router) {
    if (localStorage.getItem('ACCESS_TOKEN') !== null) {
      this.logueado = true
    }
    else {
      this.logueado = false
    }

    if (localStorage.getItem('nombre') !== undefined && localStorage.getItem('usuario') !== undefined) {
      this.nombre = localStorage.getItem('nombre')
      this.usuario = localStorage.getItem('usuario')
    }
  }

  ngOnInit() {
    if (localStorage.getItem('ACCESS_TOKEN') !== null) {
      this.logueado = true
    }
    else {
      this.logueado = false
      if (!localStorage.getItem('reload')) {
        localStorage.setItem('reload', 'no reload')
        location.reload()
      } else {

        localStorage.removeItem('reload')
        this.router.navigate([''])
      }
      
    }

  }
}
