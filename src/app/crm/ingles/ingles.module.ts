import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InglesListaComponent } from './infrastructure/presentation/ingles-lista/ingles-lista.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogEspanolComponent } from '../espanol/infrastructure/presentation/dialog-espanol/dialog-espanol.component';
import { DialogInglesComponent } from './infrastructure/presentation/dialog-ingles/dialog-ingles.component';


const routes: Routes = [
  {
      path: '',
      component: InglesListaComponent
    
  }
];

@NgModule({
  declarations: [
    InglesListaComponent,
    DialogInglesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports:[RouterModule]
})
export class InglesModule { }
