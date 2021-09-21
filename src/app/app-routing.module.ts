import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/service/AuthGuard';
import { EspanolCardComponent } from './crm/espanol/infrastructure/presentation/espanol-card/espanol-card.component';
import { InglesCardComponent } from './crm/ingles/infrastructure/presentation/ingles-card/ingles-card.component';
import { ErrorComponent } from './shared/error/error.component';
import { HomeComponent } from './shared/home/home.component';
import { PerfilComponent } from './shared/perfil/perfil.component';
import { AplicacionResolver } from './shared/resolver/resolver';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'ingles',
    loadChildren: () => import('./crm/ingles/ingles.module').then(m => m.InglesModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'espanol',
    loadChildren: () => import('./crm/espanol/espanol.module').then(e => e.EspanolModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'espanol/:palabra',
    component: EspanolCardComponent,
    resolve:{cargar:AplicacionResolver},
    canActivate:[AuthGuard]

  },
  {
    path: 'ingles/:palabra',
    component: InglesCardComponent,
    resolve:{cargar:AplicacionResolver},
    canActivate:[AuthGuard]

  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
