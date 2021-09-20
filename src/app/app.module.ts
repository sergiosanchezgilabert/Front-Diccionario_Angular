import { ErrorHandler, Injectable, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { EspanolCardComponent } from './crm/espanol/infrastructure/presentation/espanol-card/espanol-card.component';
import { InglesCardComponent } from './crm/ingles/infrastructure/presentation/ingles-card/ingles-card.component';
import { HomeComponent } from './shared/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './shared/error/error.component';
import { GlobalErrorHandlerService } from './shared/error/service/global-error-handler-service';
import { InterceptorService } from './shared/interceptor/interceptor.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { LoginComponent } from './auth/login/login.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { SocialLoginModule,SocialAuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { PerfilComponent } from './shared/perfil/perfil.component';

const CLIENT_ID = "911774596470-f541q8k01falsqa5778jkjusc35khj7b.apps.googleusercontent.com"


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    ToolbarComponent,
    LoaderComponent,
    EspanolCardComponent,
    InglesCardComponent,
    PerfilComponent

  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    OAuthModule.forRoot(),
    SocialLoginModule

  ],
  providers: [ {
    provide: "SocialAuthServiceConfig",
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            CLIENT_ID
          )
        }
      ]
    } as SocialAuthServiceConfig
  }, DatePipe,{ provide: ErrorHandler, useClass: GlobalErrorHandlerService },{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
