import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth/service/login.service';
import { DialogEspanolComponent } from 'src/app/crm/espanol/infrastructure/presentation/dialog-espanol/dialog-espanol.component';
import Swal from 'sweetalert2';
import { InglesWeb } from '../../../domain/I-InglesWeb';
import { InglesService } from '../../service/Ingles.service';

@Component({
  selector: 'app-ingles-card',
  templateUrl: './ingles-card.component.html',
  styleUrls: ['./ingles-card.component.scss']
})
export class InglesCardComponent implements OnInit {

  palabra: InglesWeb

  logueado = false

  constructor(public dialog: MatDialog, private service: InglesService,
    private route: ActivatedRoute, private router: Router, 
    public datepipe: DatePipe,private serviceLogin: LoginService) { }

  ngOnInit(): void {
    if (localStorage.getItem('username')!==null && localStorage.getItem('password')!==null) {
      var username = localStorage.getItem('username')
      var password = localStorage.getItem('password')
      console.log(username+ ' '+password)
      this.serviceLogin.getPersona(username, password).subscribe(then => {
        if(then!==null){
          this.logueado = true
          console.log(then + 'Hola')
        }
      
      })
    }
    this.route.paramMap.subscribe((param) => {
      this.service.getPalabra(param.get("palabra"))
        .subscribe((resp) => {
          this.palabra = resp
          
          this.palabra.fechaAlta=this.datepipe.transform(this.palabra.fechaAlta, 'dd/MM/yyyy')
          this.palabra.fechaModificacion = this.datepipe.transform(this.palabra.fechaModificacion, 'dd/MM/yyyy')
        });
    });
  }

  editarOn(palabra: any) {
    const dialogRef = this.dialog.open(DialogEspanolComponent, {
      width: '250px',
      data: { palabras: palabra }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.palabra = result;
      }
    });
  }

  login(){
    this.router.navigateByUrl('');
  }

  borrarOn(palabra: string) {

    Swal.fire({
      title: 'Estas seguro de eliminar esto?',
      text: "No podras volver atrás!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.borrar(palabra)
          .subscribe(resp => {
            Swal.fire(
              'Eliminado!',
              'Esta palabra ha sido elimada.',
              'success'
            )
          })
      }
    })
  }

  volverOn() {
    this.router.navigate(['ingles']);
  }

  espanolOn(palabra: String) {
    this.router.navigate(['espanol', palabra]);
  }
}
