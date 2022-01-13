import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './header/header.component';
import { AditionAccidentComponent } from './adition-accident/adition-accident.component';
import { FormComponent } from './adition-accident/form.component';
import { MapadespliegueComponent } from './mapadespliegue/mapadespliegue.component';
import { PAGES_ROUTES } from './pages.routing';
import { ClienteAccidenteService } from './mapadespliegue/services/cliente-accidente.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { InicioComponent } from './inicio/inicio.component';
import { MapangprimeComponent } from './mapangprime/mapangprime.component';


//primeNG
//import { GoogleMapsModule } from '@angular/google-maps';
import {GMapModule} from 'primeng/gmap';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule ({

    declarations: [
        PagesComponent,
        HeaderComponent,
        AditionAccidentComponent,
        FormComponent,
        MapadespliegueComponent,
        InicioComponent,
        MapangprimeComponent
    ],
    exports:      [
        PagesComponent,
        HeaderComponent,
        AditionAccidentComponent,
        MapadespliegueComponent,
        
    ],
    imports:      [
       PAGES_ROUTES,
       BrowserModule,
       BrowserAnimationsModule,
       HttpClientModule,
       //GoogleMapsModule,
       GMapModule,
       AccordionModule,
       FormsModule,
       MultiSelectModule,
       TableModule,
       
    ],
    providers:[
        ClienteAccidenteService,
        
    ]

})

export class PagesModule {

}