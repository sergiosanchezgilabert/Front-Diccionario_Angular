import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { InglesWeb } from 'src/app/crm/ingles/domain/I-InglesWeb';
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

  palabra: Espanol

  @Output() propagar = new EventEmitter<number>();

  constructor(public dialog: MatDialog, private service: EspanolService,
    private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.service.getPalabra(param.get("palabra"))
        .subscribe((resp) => {
          this.palabra = resp;
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

  volverOn(){
    this.router.navigate(['espanol']);
  }

  inglesOn(element:InglesWeb){
    this.router.navigate(['ingles',element.palabra]);
  }

}
