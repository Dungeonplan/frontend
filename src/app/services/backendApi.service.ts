import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Token } from '../types/token';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BackendApiService {
  tokenExchangeEp: string = '/api/tokenexchange';
  logoutEp: string = '/api/logout';

  constructor(private http: HttpClient) {}

  private static httpOptionsJSONWithBearer(token: string) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '.concat(token),
      }),
    };
  }

  doTokenExchange(inputToken: string): Observable<Token> {
    return this.http
      .post<Token>(environment.host + this.tokenExchangeEp, {
        token: inputToken,
      })
      .pipe(shareReplay(1));
  }

  doLogout(token: Token) {
    return this.http
      .get(
        environment.host + this.logoutEp,
        BackendApiService.httpOptionsJSONWithBearer(token.token)
      )
      .pipe(shareReplay(1));
  }
}
