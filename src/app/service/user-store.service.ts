import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { retry } from 'rxjs';
import { Api } from '../class/api';
import { User } from '../class/user';
import { UserFactory } from '../class/user-factory';
import { GenericResponse } from '../interface/generic-response';

@Injectable({
  providedIn: 'root'
})

export class UserStoreService {

  private _user: User;

  constructor(private http: HttpClient) {  
    this._user = UserFactory.empty()
    if (isDevMode()) {
      console.log("New UserStoreService created.")
    }
  }

  setCurrentUser(user: User) {
    if (isDevMode()) {
      console.log("New User was set.")
      console.log(user)
    } 
    this._user = user;
  }

  getCurrentUser(): User {
    return this._user;
  }

  logoutCurrentUser() {
    let options = Api.httpOptionsJSONWithBearer(this.getCurrentUser().token)
    this._user = UserFactory.empty()
    return this.http.get<GenericResponse>(Api.getLogoutURL(), options)
      .pipe(
        retry(1)
      )
  }

}
