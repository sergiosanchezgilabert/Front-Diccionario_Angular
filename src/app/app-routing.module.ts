import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspanolListaComponent } from './crm/espanol/infrastructure/presentation/espanol-lista/espanol-lista.component';
import { InglesListaComponent } from './crm/ingles/infrastructure/presentation/ingles-lista/ingles-lista.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'ingles',
    component:InglesListaComponent
  },
  {
    path:'espanol',
    component:EspanolListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
