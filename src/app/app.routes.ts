import {RouterModule, Routes} from '@angular/router'

import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { LoginComponent } from './login/login.component'
import { ProgressComponent } from './pages/progress/progress.component'
import { Grafico1Component } from './pages/grafico1/grafico1.component'
import { NopageComponent } from './shared/nopage/nopage.component'
import { PagesComponent } from './pages/pages.component'
import { RegisterComponent } from './login/register.component'





const appRoutes: Routes =[
    {
        path:'',
        component: PagesComponent,
        children:[
            {path:'dashboard',component: DashboardComponent},
            {path:'progress',component:ProgressComponent},
            {path:'graficas1',component:Grafico1Component},

        ]
    },
   
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'**',component:NopageComponent}
  
 
   // {path:'',redirectTo: '/dashboard',pathMatch:'full'},// cualquier ruta va a redireccionar al dashboard


];


export const app_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true})