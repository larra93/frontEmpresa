import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  
 
  constructor( private router: Router ){}
  
 
  canActivate(): Observable<boolean> |  boolean  {
  
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      this.router.navigateByUrl('/auth');
      return false;
    }
  

  }
  canLoad(): Observable<boolean> | boolean{

    if(localStorage.getItem('token')){
      return true;
    }
    else{
      this.router.navigateByUrl('/auth');
      return false;
    }
  }
}
