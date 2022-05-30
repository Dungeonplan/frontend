import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {BackendApiService} from "../services/backendApi.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {


  constructor(private router: Router, private backendApi: BackendApiService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route?.paramMap.get('token')) {
      return this.backendApi.doTokenExchange(route.paramMap.get('token') as string).pipe(map(value => {
        if (value) {
          this.router.navigate(['/dashboard'], {state: {token: value}});
          return false;
        } else {
          this.router.navigate(['/dashboard']);
          return false;
        }
      }));
    }
    return true;
  }

}
