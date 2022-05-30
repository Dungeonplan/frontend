import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { BackendApiService } from './backendApi.service';
import { Token } from '../types/token';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  constructor(
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private apiClient: BackendApiService
  ) {}

  tokenExchange(inputToken: string): Observable<Token> {
    return this.apiClient.doTokenExchange(inputToken).pipe(retry(1));
  }

  setCurrentToken(token: Token) {
    this.storage.set('currentToken', token);
  }

  getCurrentToken(): Token {
    return this.storage.get('currentToken') || undefined;
  }

  logout() {
    this.storage.remove('currentUser');
    return this.apiClient.doLogout(this.getCurrentToken()).pipe(retry(1));
  }
}
