import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Api } from '../class/api';
import { Role } from '../interface/role';
import { UserStoreService } from '../service/user-store.service';

@Injectable({
  providedIn: 'root'
})
export class RolesResolver implements Resolve<Role[]> {
  constructor(private httpClient: HttpClient, private userStore: UserStoreService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Role[]> {
    let options = Api.httpOptionsJSONWithBearer(this.userStore.getCurrentUser().token)
    return this.httpClient.get<Role[]>(Api.getRolesURL(), options)
  }
}
