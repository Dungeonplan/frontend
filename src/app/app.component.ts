import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  menuMode = 'static';

  topbarColor = 'layout-topbar-light';

  inputStyle = 'outlined';

  ripple = false;

  lightMenu = true;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.ripple = true;
  }
}
