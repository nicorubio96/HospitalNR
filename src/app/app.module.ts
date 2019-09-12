import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import {app_ROUTES} from './app.routes'


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopageComponent } from './shared/nopage/nopage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafico1Component } from './pages/grafico1/grafico1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopageComponent,
    DashboardComponent,
    ProgressComponent,
    Grafico1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    app_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
