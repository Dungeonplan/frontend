import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AuthorizeComponent } from "./components/authorize/authorize.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import {BackendApiService} from "./services/backendApi.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent,
                AuthorizeComponent,
                DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
