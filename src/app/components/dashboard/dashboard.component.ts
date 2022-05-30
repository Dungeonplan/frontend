import {Component, OnInit} from '@angular/core';
import {Token} from "../../types/token";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  token: Token;
constructor(private router: Router) {
  //TODO: Write the token somewhere, so it can be reused.
  this.token = this.router.getCurrentNavigation()?.extras?.state?.['token'];
}
}
