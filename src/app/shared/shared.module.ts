import {NgModule} from '@angular/core';
import { NopageComponent } from './nopage/nopage.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports : [RouterModule,
        CommonModule // vienen los ngfor ngif etc
    ],
    declarations:[
        NopageComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent

    ],
    exports:[
        NopageComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ]


})

export class SharedModule{}