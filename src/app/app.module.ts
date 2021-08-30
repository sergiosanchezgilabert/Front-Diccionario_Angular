import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { EspanolCardComponent } from './crm/espanol/infrastructure/presentation/espanol-card/espanol-card.component';
import { InglesCardComponent } from './crm/ingles/infrastructure/presentation/ingles-card/ingles-card.component';
import { InglesListaComponent } from './crm/ingles/infrastructure/presentation/ingles-lista/ingles-lista.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { HomeComponent } from './shared/home/home.component';
import { EspanolListaComponent } from './crm/espanol/infrastructure/presentation/espanol-lista/espanol-lista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogBuscadorComponent } from './crm/espanol/infrastructure/presentation/dialog-buscador/dialog-buscador.component';
import { DialogEspanolComponent } from './crm/espanol/infrastructure/presentation/dialog-espanol/dialog-espanol.component';
import { DialogInglesComponent } from './crm/ingles/infrastructure/presentation/dialog-ingles/dialog-ingles.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EspanolCardComponent,
    InglesCardComponent,
    ToolbarComponent,
    HomeComponent,
    EspanolListaComponent,
    InglesListaComponent,
    DialogBuscadorComponent,
    DialogEspanolComponent,
    DialogInglesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
