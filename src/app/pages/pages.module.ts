import { NgModule } from "@angular/core";

import {SharedModule} from '../shared/shared.module'
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafico1Component } from './grafico1/grafico1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({

    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafico1Component
    ],
    exports:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafico1Component

    ],
    imports:[SharedModule,
             PAGES_ROUTES    
        ]
})
export class PagesModule{}