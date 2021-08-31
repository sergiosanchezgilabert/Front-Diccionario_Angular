import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { EspanolWeb } from 'src/app/crm/espanol/domain/IEspanolWeb';
import { DialogBuscadorComponent } from 'src/app/crm/espanol/infrastructure/presentation/dialog-buscador/dialog-buscador.component';
import { DialogEspanolComponent } from 'src/app/crm/espanol/infrastructure/presentation/dialog-espanol/dialog-espanol.component';
import { EspanolService } from 'src/app/crm/espanol/infrastructure/service/espanol-service';
import Swal from 'sweetalert2';
import { Ingles } from '../../../domain/I-Ingles';
import { InglesWeb } from '../../../domain/I-InglesWeb';
import { InglesService } from '../../service/InglesService';
import { DialogInglesComponent } from '../dialog-ingles/dialog-ingles.component';

@Component({
  selector: 'app-ingles-lista',
  templateUrl: './ingles-lista.component.html',
  styleUrls: ['./ingles-lista.component.scss']
})
export class InglesListaComponent implements OnInit {

  lista_ingles_web: Array<InglesWeb> = []

  options: string[] = []

  displayedColumns: string[] = ['Id', 'Name', 'Traduction', 'CreateDate', 'ModifyDate', 'Action'];

  constructor(private service: InglesService, public dialog: MatDialog,
    public datepipe: DatePipe, public router: Router
  ) {

  }

  ngOnInit() {
    this.getDatos()
  }

  getDatos() {
    this.service.cargarTodos().subscribe(
      resp => {
        this.lista_ingles_web = resp

        for (let i = 0; i < this.lista_ingles_web.length; i++) {
          this.options.push(this.lista_ingles_web[i].palabra)

          this.lista_ingles_web[i].fechaAlta = this.datepipe.transform(this.lista_ingles_web[i].fechaAlta, 'dd/MM/yyyy')
          this.lista_ingles_web[i].fechaModificacion = this.datepipe.transform(this.lista_ingles_web[i].fechaModificacion, 'dd/MM/yyyy')
        }
        this.cargarDatosBuscador()

      }
    )

  }

  cargarDatosBuscador() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }


  aniadirOn() {
    const dialogRef = this.dialog.open(DialogInglesComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getDatos()
    });
  }

  editarOn(palabra: Ingles) {
    const dialogRef = this.dialog.open(DialogInglesComponent, {
      width: '250px',
      data: { palabras: palabra }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getDatos()
    });
  }

  borrarOn(palabra: Ingles) {

    Swal.fire({
      title: 'Are you sure to delete it?',
      text: "You can´t come back!",
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
            console.log('aqui llego bien')
            Swal.fire(
              'Delete!',
              'This word has been deleted.',
              'success'
            )
            console.log('aqui llego bien')
            for (let i = 0; i < this.lista_ingles_web.length; i++) {
              console.log('Comparando: ' + palabra.id + ' // ' + this.lista_ingles_web[i].id)
              if (palabra.id == this.lista_ingles_web[i].id) {
                this.lista_ingles_web.splice(i, 1)
                this.getDatos()
              }
            }
          })
      }
    })
  }

  espanolOn(element: InglesWeb) {
    let palabra: String
    palabra = element.palabraEspanol

    this.router.navigate(['espanol', palabra]);
  }

  buscador(options: string[]) {

    const dialogRef = this.dialog.open(DialogBuscadorComponent, {
      width: '250px',
      height: '200px',
      data: { options: options, idioma: 'ingles' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
      }
    });
  }




  myControl = new FormControl();
  idioma: string
  filteredOptions: Observable<string[]>;


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  buscarOn(palabra: string) {
    this.router.navigate(['ingles', palabra])
  }











}
