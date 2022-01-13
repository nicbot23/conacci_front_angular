import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  APP_ROUTES } from './app.routing';
import { AppComponent } from './app.component';
//import { MapadespliegueComponent } from './pages/mapadespliegue/mapadespliegue.component';
import { ClienteAccidenteService } from './pages/mapadespliegue/services/cliente-accidente.service';
import { RouterModule, Routes} from '@angular/router';
//import { AditionAccidentComponent } from './pages/adition-accident/adition-accident.component';
//import { HeaderComponent } from './pages/header/header.component';
import { HttpClientModule } from '@angular/common/http';
//import { FormComponent } from './pages/adition-accident/form.component';
import { FormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
//import { PagesComponent } from './pages/pages.component';



/*const routes: Routes = [

  {path: '', redirectTo:'/conacci', pathMatch:'full'},
 // {path: 'adicion_accidente', component:AditionAccidentComponent},
  //{path: 'accidentes', component:MapadespliegueComponent},
 // {path: 'adicion_accidente/form', component:FormComponent}
];*/

@NgModule({
  declarations: [
    AppComponent,
   // MapadespliegueComponent,
   /* AditionAccidentComponent,
    HeaderComponent,
    FormComponent,
    PagesComponent*/
  ],
  imports: [
    //BrowserModule,
   // HttpClientModule,
    PagesModule,
    APP_ROUTES,
   // RouterModule.forRoot(routes)
   
  ],
  providers: [
   // ClienteAccidenteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
