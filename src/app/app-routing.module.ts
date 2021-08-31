import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspanolCardComponent } from './crm/espanol/infrastructure/presentation/espanol-card/espanol-card.component';
import { EspanolListaComponent } from './crm/espanol/infrastructure/presentation/espanol-lista/espanol-lista.component';
import { InglesCardComponent } from './crm/ingles/infrastructure/presentation/ingles-card/ingles-card.component';
import { InglesListaComponent } from './crm/ingles/infrastructure/presentation/ingles-lista/ingles-lista.component';
import { ErrorComponent } from './shared/error/error.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'ingles',
    loadChildren: () => import('./crm/ingles/ingles.module').then(m => m.InglesModule)
  },
  {
    path:'espanol',
    loadChildren: () => import('./crm/espanol/espanol.module').then(e => e.EspanolModule)
  },
  {
    path:'espanol/:palabra',
    component:EspanolCardComponent
  },
  {
    path:'ingles/:palabra',
    component:InglesCardComponent
  }, 
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
