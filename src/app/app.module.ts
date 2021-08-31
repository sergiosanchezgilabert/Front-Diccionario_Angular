import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { EspanolCardComponent } from './crm/espanol/infrastructure/presentation/espanol-card/espanol-card.component';
import { InglesCardComponent } from './crm/ingles/infrastructure/presentation/ingles-card/ingles-card.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { HomeComponent } from './shared/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './shared/error/error.component';
import { GlobalErrorHandlerService } from './shared/error/service/global-error-handler-service';
import { InterceptorService } from './crm/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    EspanolCardComponent,
    InglesCardComponent,
    ToolbarComponent,
    HomeComponent,
    ErrorComponent,
    
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe,{ provide: ErrorHandler, useClass: GlobalErrorHandlerService },{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
