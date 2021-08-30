import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Espanol } from '../../../domain/IEspanol';
import { EspanolWeb } from '../../../domain/IEspanolWeb';
import { EspanolService } from '../../service/espanol-service';
import { DialogBuscadorComponent } from '../dialog-buscador/dialog-buscador.component';
import { DialogEspanolComponent } from '../dialog-espanol/dialog-espanol.component';

@Component({
  selector: 'app-espanol-lista',
  templateUrl: './espanol-lista.component.html',
  styleUrls: ['./espanol-lista.component.scss']
})
export class EspanolListaComponent implements OnInit {

  lista_espanol: Array<EspanolWeb> = []

  options: string[] = []

  displayedColumns: string[] = ['Id', 'Nombre', 'Descripcion', 'FechaCreacion', 'Palabras Ingles','Action'];

  constructor(private service: EspanolService, public dialog: MatDialog, 
    public datepipe:DatePipe,public router:Router) {

  }

  ngOnInit() {

    this.getDatos()
    
  }

  getDatos(){
    this.service.cargarTodos().subscribe(
      resp => {
        this.lista_espanol = resp;

        for (let i = 0; i < this.lista_espanol.length; i++) {
          this.options.push(this.lista_espanol[i].palabra)

          this.lista_espanol[i].fechaAlta = this.datepipe.transform(this.lista_espanol[i].fechaAlta, 'dd/MM/yyyy')
          this.lista_espanol[i].fechaModificacion = this.datepipe.transform(this.lista_espanol[i].fechaModificacion, 'dd/MM/yyyy')
        }
      }
    )
  }

  aniadirOn(){
    const dialogRef = this.dialog.open(DialogEspanolComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getDatos()
    });
  }

  editarOn(palabra: Espanol) {
    const dialogRef = this.dialog.open(DialogEspanolComponent, {
      width: '250px',
      data: { palabras: palabra }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getDatos()
    });
  }

  borrarOn(palabra: Espanol) {

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
        this.service.borrar(palabra.palabra)
          .subscribe(resp => {
            Swal.fire(
              'Eliminado!',
              'Esta palabra ha sido elimada.',
              'success'
            )
            for (let i = 0; i < this.lista_espanol.length; i++) {
              console.log('Comparando: ' + palabra.id + ' // ' + this.lista_espanol[i].id)
              if (palabra.id == this.lista_espanol[i].id) {
                this.lista_espanol.splice(i, 1)
                this.getDatos()
              }
            }
          })
      }
    })
  }

  detallesOn(element:EspanolWeb){
    let palabra:String
    palabra=element.palabra

    this.router.navigate(['espanol', palabra]);
  }

  buscador(options: string[]) {

    const dialogRef = this.dialog.open(DialogBuscadorComponent, {
      width: '250px',
      height: '200px',
      data: { options: options }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
      }
    });
  }
}
