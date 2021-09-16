import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InglesListaComponent } from './infrastructure/presentation/ingles-lista/ingles-lista.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogInglesComponent } from './infrastructure/presentation/dialog-ingles/dialog-ingles.component';
import { AplicacionResolver } from 'src/app/shared/resolver/resolver';


const routes: Routes = [
  {
      path: '',
      component: InglesListaComponent,
      resolve:{cargar:AplicacionResolver}
  }
];

@NgModule({
  declarations: [
    InglesListaComponent,
    DialogInglesComponent,
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
