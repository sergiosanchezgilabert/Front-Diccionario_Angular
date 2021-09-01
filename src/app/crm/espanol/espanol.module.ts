import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspanolListaComponent } from './infrastructure/presentation/espanol-lista/espanol-lista.component';
import { DialogEspanolComponent } from './infrastructure/presentation/dialog-espanol/dialog-espanol.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: EspanolListaComponent
  }
];

@NgModule({
  declarations: [
    EspanolListaComponent,
    DialogEspanolComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,

  ],
  exports: [RouterModule]
})
export class EspanolModule { }
