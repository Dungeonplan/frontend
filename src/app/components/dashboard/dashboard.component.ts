import { Component } from '@angular/core';
import { Token } from '../../types/token';
import { UserStoreService } from '../../services/user-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  token: Token;
  constructor(private userStore: UserStoreService) {
    this.token = this.userStore.getCurrentToken();
  }
}
