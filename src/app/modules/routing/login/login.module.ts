import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { AppLoginComponent } from 'src/app/pages/app.login.component';
import { BackendApiService } from '../../../services/backendApi.service';
import { UserStoreService } from '../../../services/user-store.service';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppLoginComponent],
  providers: [BackendApiService, UserStoreService],
  imports: [CommonModule, LoginRoutingModule, ButtonModule],
})
export class LoginModule {}
