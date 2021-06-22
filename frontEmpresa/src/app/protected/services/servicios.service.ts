import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Servicio, ServiciosResponse } from '../interfaces/servicios-interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl: string = environment.baseUrl;
  private _servicio!: Servicio;

  constructor( private http: HttpClient) { }


  registrarServicio( nombre: string, descripcion: string, imagen: string ){

    const url = `${ this.baseUrl }/register`;
    const body = { nombre, descripcion, imagen };

    return this.http.post<ServiciosResponse>( url , body )

  }
}
