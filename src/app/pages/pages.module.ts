import { NgModule } from "@angular/core";
import {FormsModule} from '@angular/forms'
import {SharedModule} from '../shared/shared.module'
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafico1Component } from './grafico1/grafico1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

//ng-charts
import {ChartsModule} from 'ng2-charts'


//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';


@NgModule({

    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafico1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        PromesasComponent
    ],
    exports:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafico1Component

    ],
    imports:[SharedModule,
             PAGES_ROUTES,
             FormsModule,
             ChartsModule
        ]
})
export class PagesModule{}