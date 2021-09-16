import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/service/login.service';
import Swal from 'sweetalert2';
import { Espanol } from '../../../domain/IEspanol';
import { EspanolService } from '../../service/espanol-service';

@Component({
  selector: 'app-dialog-espanol',
  templateUrl: './dialog-espanol.component.html',
  styleUrls: ['./dialog-espanol.component.scss']
})
export class DialogEspanolComponent implements OnInit {

  palabra: Espanol

  editando: boolean = false

  logueado = false

  formEspanol: FormGroup = this.fb.group({
    palabra: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]], //Validators.pattern('[a-zA-Z]* ') Para permitir espacios
    descripcion: ['', Validators.required]
  })

  constructor(public dialogRef: MatDialogRef<DialogEspanolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder,
    private espanolService: EspanolService, private serviceLogin: LoginService,
    private router: Router) {
    if (localStorage.getItem('logueado') !== null) {
      this.logueado = true
    }
  }

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

  login() {
    this.router.navigateByUrl('');
  }

  enviar() {
    if (this.editando == true) {
      this.espanolService.editar(this.formEspanol.value)
        .subscribe(() => {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Palabra editada',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close(this.formEspanol.value);
        })
    } else {
      this.espanolService.aniadir(this.formEspanol.value)
        .subscribe(() => {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Palabra añadida',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close(this.formEspanol.value);
        })
    }
  }
}
