import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Espanol } from '../../../domain/IEspanol';
import { EspanolService } from '../../service/espanol-service';
import { DialogEspanolComponent } from '../dialog-espanol/dialog-espanol.component';

@Component({
  selector: 'app-espanol-card',
  templateUrl: './espanol-card.component.html',
  styleUrls: ['./espanol-card.component.scss']
})
export class EspanolCardComponent implements OnInit {

  @Input() palabra: Espanol

  @Output() propagar = new EventEmitter<number>();

  constructor(public dialog: MatDialog, private service: EspanolService) { }

  ngOnInit(): void {
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
            this.propagar.emit(this.palabra.id)
          })
      }
    })
  }


}
