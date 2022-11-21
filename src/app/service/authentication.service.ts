import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { 
    if (isDevMode()) {
      console.log("New AuthenticationService created")
    }
  }
}
