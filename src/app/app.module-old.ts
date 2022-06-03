import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {BackendApiService} from "./services/backendApi.service";
import {HttpClientModule} from "@angular/common/http";
import {UserStoreService} from "./services/user-store.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [
    BackendApiService,
    UserStoreService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
