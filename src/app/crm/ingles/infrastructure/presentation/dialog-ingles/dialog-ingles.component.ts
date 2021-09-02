import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Espanol } from 'src/app/crm/espanol/domain/IEspanol';
import { EspanolWeb } from 'src/app/crm/espanol/domain/IEspanolWeb';
import { EspanolService } from 'src/app/crm/espanol/infrastructure/service/espanol-service';
import Swal from 'sweetalert2';
import { Ingles } from '../../../domain/I-Ingles';
import { InglesWeb } from '../../../domain/I-InglesWeb';
import { InglesService } from '../../service/InglesService';

@Component({
  selector: 'app-dialog-ingles',
  templateUrl: './dialog-ingles.component.html',
  styleUrls: ['./dialog-ingles.component.scss']
})
export class DialogInglesComponent implements OnInit {

  palabraIngles: Ingles

  editando: boolean = false

  formIngles: FormGroup = this.fb.group({
    palabra: ['', [Validators.required,, Validators.pattern('[a-zA-Z ]*')]],
    palabraEspanol: ['', Validators.required]
  })

  constructor(public dialogRef: MatDialogRef<DialogInglesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder,
    private inglesService: InglesService, private espanolService: EspanolService) { }

  ngOnInit(): void {
    if (this.data !== null) {
      this.palabraIngles = this.data.palabras
      this.formIngles.patchValue(this.data.palabras)
      this.editando = true
    }
  }

  cancelar() {
    this.dialogRef.close()
  }

  enviar() {
    //Editando palabra
    if (this.editando == true) {
      this.inglesService.editar(this.formIngles.value)
        .subscribe(() => {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Word edit',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close(this.formIngles.value);
        })
    } else { //Añadiendo palabra
      let palabraNueva: Ingles = this.formIngles.value
      this.espanolService.getPalabra(palabraNueva.palabraEspanol)

      this.inglesService.aniadir(palabraNueva)
        .subscribe(() => {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Word add',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close(this.formIngles.value);
        })
    }
  }

}
