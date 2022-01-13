import { Injectable } from '@angular/core';
import {ClienteAccidentes} from '../entities/clienteAccidente';
import {of, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClienteAccidenteService {

  private urlEndPoint: string = 'http://localhost:8090/api/accidentes';
  constructor(private http:HttpClient) { }

  //metodo asincrono
  getClientes():Observable<ClienteAccidentes[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as ClienteAccidentes[])
    );
  }
}
