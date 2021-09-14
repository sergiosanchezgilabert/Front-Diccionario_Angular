import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { EspanolCardComponent } from './crm/espanol/infrastructure/presentation/espanol-card/espanol-card.component';
import { InglesCardComponent } from './crm/ingles/infrastructure/presentation/ingles-card/ingles-card.component';
import { ErrorComponent } from './shared/error/error.component';
import { HomeComponent } from './shared/home/home.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ingles',
    loadChildren: () => import('./crm/ingles/ingles.module').then(m => m.InglesModule)
  },
  {
    path: 'espanol',
    loadChildren: () => import('./crm/espanol/espanol.module').then(e => e.EspanolModule)
  },
  {
    path: 'espanol/:palabra',
    component: EspanolCardComponent
  },
  {
    path: 'ingles/:palabra',
    component: InglesCardComponent
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
