import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu:any =[
    {
      titulo:'Principal',
      icono:'mdi mdi-gauge',
      submenu:[
        {titulos:'Dashboard',url:'/dashboard'},
        {titulos:'ProgressBar',url:'/progress'},
        {titulos:'Graficas',url:'/graficas1'}
      ]
    }

  ];

  constructor() { }
}
