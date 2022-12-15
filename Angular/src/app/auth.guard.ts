import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Step1Component } from './home/step1/step1.component';

export interface authInterface{
  canActivateRoute():boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(){    
    return this.step1.canActivateRoute();
  }
  
  constructor(public step1:Step1Component){
    
  }
}
