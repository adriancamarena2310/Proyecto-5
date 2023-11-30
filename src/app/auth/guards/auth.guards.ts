import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, CanActivateFn, CanMatch, CanMatchFn, Route, UrlSegment, UrlTree, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate {


  constructor() { }
  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean >  {
    console.log({route, segments})
    console.log('Can Match')
    return false;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log({route, state})
    console.log('Can activate')


    return true;}

}
