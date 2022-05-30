import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom, Observable, of} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {Token} from "../types/token";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  tokenExchangeEp: string = '/api/tokenexchange';

  constructor(private http: HttpClient) {
  }

  doTokenExchange(inputToken: string): Observable<Token | undefined> {
    return this.http.post<Token>(environment.host + this.tokenExchangeEp, { token: inputToken})
      .pipe(shareReplay(1));
  }
}
