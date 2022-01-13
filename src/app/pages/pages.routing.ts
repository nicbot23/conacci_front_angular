import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';
import { MapadespliegueComponent } from './mapadespliegue/mapadespliegue.component';
import { AditionAccidentComponent } from './adition-accident/adition-accident.component';
import { FormComponent } from './adition-accident/form.component';
import { InicioComponent } from './inicio/inicio.component';
import { MapangprimeComponent } from './mapangprime/mapangprime.component';


const pagesRoutes: Routes = [
    {path: '',
    component: PagesComponent,
    children: [
        {path: 'inicio', component: InicioComponent},
        {path: 'mapa', component: MapadespliegueComponent},
        {path: 'mapaNG', component: MapangprimeComponent},
        {path: 'listadoAccidentes', component: AditionAccidentComponent},
        {path: 'reportarAccidente', component: FormComponent},
        {path: '', redirectTo:'/inicio', pathMatch:'full'},
    ],
}
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes);
