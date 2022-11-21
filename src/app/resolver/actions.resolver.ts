import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Api } from '../class/api';
import { Action } from '../interface/action';
import { UserStoreService } from '../service/user-store.service';

@Injectable({
  providedIn: 'root'
})
export class ActionsResolver implements Resolve<Action[]> {

  constructor(private userStore: UserStoreService, private httpClient: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Action[]> {
    let options = Api.httpOptionsJSONWithBearer(this.userStore.getCurrentUser().token)
    return this.httpClient.get<Action[]>(Api.getActionsURL(), options)
  }
}
