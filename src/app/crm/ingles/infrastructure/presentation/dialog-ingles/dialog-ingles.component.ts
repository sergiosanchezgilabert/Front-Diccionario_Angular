import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Ingles } from '../../../domain/I-Ingles';
import { InglesService } from '../../service/InglesService';

@Component({
  selector: 'app-dialog-ingles',
  templateUrl: './dialog-ingles.component.html',
  styleUrls: ['./dialog-ingles.component.scss']
})
export class DialogInglesComponent implements OnInit {

  palabra: Ingles

  editando: boolean = false

  formEspanol: FormGroup = this.fb.group({
    palabra: [''],
    palabraEspanol: ['']
  })

  constructor(public dialogRef: MatDialogRef<DialogInglesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder, private espanolService: InglesService) { }

  ngOnInit(): void {
    if (this.data !== null) {
      this.palabra = this.data.palabras
      this.formEspanol.patchValue(this.data.palabras)
      this.editando = true
    }
  }

  cancelar() {
    this.dialogRef.close()
  }

  enviar() {
    if (this.editando == true) {
      this.espanolService.editar(this.formEspanol.value)
        .subscribe(() => {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Estudiante editado',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close(this.formEspanol.value);
        })
    }else{
      this.espanolService.aniadir(this.formEspanol.value)
        .subscribe(() => {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Estudiante añadido',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close(this.formEspanol.value);
        })
    }
  }

}
