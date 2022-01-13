import { Component, OnInit } from '@angular/core';
import { ClienteAccidenteService } from './services/cliente-accidente.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { ClienteAccidentes } from './entities/clienteAccidente';
import { stringify } from 'querystring';



@Component({
  selector: 'app-mapadespliegue',
  templateUrl: './mapadespliegue.component.html',
  styleUrls: ['./mapadespliegue.component.scss']
})
export class MapadespliegueComponent implements OnInit {

  accidentes: ClienteAccidentes[];

  mapa: mapboxgl.map;
  constructor(private accidentesService: ClienteAccidenteService) { }

  ngOnInit(): void {

    mapboxgl.accessToken = environment.mapboxKey;
    this.mapa = new mapboxgl.Map({
      container: 'mapa', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-76.561535727778,2.5689377388889], // starting position
      zoom: 9 // starting zoom
      });
    this.mapa.addControl(new mapboxgl.NavigationControl());

    this.accidentesService.getClientes().subscribe(
      result => {
        this.accidentes = result as ClienteAccidentes[];

        result.forEach(element => {
      var longitud: number = parseInt(element.longitud);
      var latitud: number = parseInt(element.latitud);
      //this.crearMarcador(longitud,latitud);

      //this.crearMarcador(longitud,latitud);

          var id: string = element.id.toString();
         // console.log("------accidentes---->",this.accidentes[].latitud)
         //console.log("------accidentes---->","  long:",element.longitud,"  -   lat:",element.latitud)
        });
        
      },
    );


      this.crearMarcador(-76.561535727778,2.5689377388889);
     //this.crearMarcador();
    //}

    


    


    

  }

  crearMarcador(ling: number, lat: number){
    
    const marker = new mapboxgl.Marker({
      draggable: false // permite deslizarse
      })
      .setLngLat([ling, lat])
      .addTo(this.mapa);

      console.log("el mensaje esta listo")

      
      /*this.accidentes.forEach(element => {
        console.log("object ---->", element )
      });*/
       
     /* function onDragEnd() {
      var lngLat = marker.getLngLat();
      this.coordinates.style.display = 'block';
      this.coordinates.innerHTML =
      'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
      }
       
      marker.on('dragend', onDragEnd);*/
  }


}
