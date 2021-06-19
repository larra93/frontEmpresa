import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthResponse, Usuario } from '../interfaces/auth-interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  constructor( private http: HttpClient) { }


  registrarUsuario( name: string, email: string, password: string ){

    const url = `${ this.baseUrl }/register`;
    const body = { name, email, password };

    return this.http.post<AuthResponse>( url , body )
               .pipe(
                 tap( ({ res, msj }) => {
                   if ( res ){
                     
                  }
                }),
                map( resp => resp.res ),
                catchError( err => of ( err.error.msj ) )
              )
  }


  login( email: string, password: string ){

    const url = `${ this.baseUrl }/login`;
    const body = { email, password };
    
    return this.http.post<AuthResponse>( url, body )
          .pipe(
            tap( resp => {
              if ( resp.res ){
                localStorage.setItem('token',resp.token! );
              }
            }),
            map( resp => resp.res ),
            catchError( err => of ( err.error.msg ) )
          )
  }
}
