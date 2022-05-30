import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { UserStoreService } from './user-store.service';
import { map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthorizationResolver implements Resolve<undefined> {
  constructor(private userService: UserStoreService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot) {
    if (route?.paramMap.get('token')) {
      return this.userService
        .tokenExchange(route.paramMap.get('token') as string)
        .pipe(
          map((value) => {
            if (value) {
              this.userService.setCurrentToken(value);
              this.router.navigate(['/dashboard']);
            }
            return undefined;
          })
        );
    } else {
      return of(undefined);
    }
  }
}
