import { Component, OnInit } from '@angular/core';
import { ClienteAccidenteService } from '../mapadespliegue/services/cliente-accidente.service';
import { ClienteAccidentes } from '../mapadespliegue/entities/clienteAccidente';
//import { MessageService } from 'primeng/api';

declare var google: any;

@Component({
  selector: 'app-mapangprime',
  templateUrl: './mapangprime.component.html',
  styleUrls: ['./mapangprime.component.scss'],
})
export class MapangprimeComponent implements OnInit {
  accidentes: ClienteAccidentes[];
 
  options: any;

  overlays: any[];

  constructor( private accidentesService: ClienteAccidenteService) {}

  ngOnInit(): void {
    this.options = {
      center: { lat: 1.205049, lng: -77.262215 },
      zoom: 12,
    };

    this.accidentesService.getClientes().subscribe(
      res => {
        this.accidentes = res  

        res.forEach(
          element => {
            var longitud: number = parseInt(element.longitud);
            var latitud: number = parseInt(element.latitud);
           this.overlays = [
             new google.maps.Marker({
               position: {lat: latitud, lng: longitud},
               title: element.carretera,
             })
           ];
           // console.log("------accidentesmapngprime---->","  long:",element.longitud,"  -   lat:",element.latitud)
          }
        );
      }
    );

   /* this.overlays = [
                new google.maps.Marker({
                  position: { lat: 36.879466, lng: 30.667648 },
                  title: 'Konyaalti',
                }),
                new google.maps.Marker({
                  position: { lat: 36.883707, lng: 30.689216 },
                  title: 'Ataturk Park',
                }),
                new google.maps.Marker({
                  position: { lat: 36.885233, lng: 30.702323 },
                  title: 'Oldtown',
                }),
                new google.maps.Polygon({
                  paths: [
                    { lat: 36.9177, lng: 30.7854 },
                    { lat: 36.8851, lng: 30.7802 },
                    { lat: 36.8829, lng: 30.8111 },
                    { lat: 36.9177, lng: 30.8159 },
                  ],
                  strokeOpacity: 0.5,
                  strokeWeight: 1,
                  fillColor: '#1976D2',
                  fillOpacity: 0.35,
                }),
                new google.maps.Circle({
                  center: { lat: 36.90707, lng: 30.56533 },
                  fillColor: '#1976D2',
                  fillOpacity: 0.35,
                  strokeWeight: 1,
                  radius: 1500,
                }),
                new google.maps.Polyline({
                  path: [
                    { lat: 36.86149, lng: 30.63743 },
                    { lat: 36.86341, lng: 30.72463 },
                  ],
                  geodesic: true,
                  strokeColor: '#FF0000',
                  strokeOpacity: 0.5,
                  strokeWeight: 2,
                }),
    ];*/
  }

  zoomIn(map) {
    map.setZoom(map.getZoom() + 1);
  }

  zoomOut(map) {
    map.setZoom(map.getZoom() - 1);
  }
}
