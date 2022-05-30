import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { BackendApiService } from '../../../services/backendApi.service';
import { UserStoreService } from '../../../services/user-store.service';

@NgModule({
  declarations: [DashboardComponent],
  providers: [BackendApiService, UserStoreService],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
