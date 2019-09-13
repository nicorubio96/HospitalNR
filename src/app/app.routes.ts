import {RouterModule, Routes} from '@angular/router'

import { LoginComponent } from './login/login.component'

import { NopageComponent } from './shared/nopage/nopage.component'
import { RegisterComponent } from './login/register.component'





const appRoutes: Routes =[
 
   
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'**',component:NopageComponent}
  
 
   // {path:'',redirectTo: '/dashboard',pathMatch:'full'},// cualquier ruta va a redireccionar al dashboard


];


export const app_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true})