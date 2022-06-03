import { Component, OnInit } from '@angular/core';
import { MenuService } from './app.menu.service';
import { PrimeNGConfig } from 'primeng/api';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-main',
  templateUrl: './app.main.component.html',
})
export class AppMainComponent implements OnInit {
  topbarMenuActive: boolean | undefined;

  overlayMenuActive: boolean | undefined;

  staticMenuDesktopInactive: boolean | undefined;

  staticMenuMobileActive: boolean | undefined;

  menuClick: boolean | undefined;

  topbarItemClick: boolean | undefined;

  resetMenu: boolean | undefined;

  menuHoverActive: boolean | undefined;

  configActive: boolean | undefined;

  configClick: boolean | undefined;

  constructor(
    private menuService: MenuService,
    private primengConfig: PrimeNGConfig,
    public app: AppComponent
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  onLayoutClick() {
    if (!this.topbarItemClick) {
      this.topbarMenuActive = false;
    }

    if (!this.menuClick) {
      if (this.isHorizontal() || this.isSlim()) {
        this.menuService.reset();
      }

      if (this.overlayMenuActive || this.staticMenuMobileActive) {
        this.hideOverlayMenu();
      }

      this.menuHoverActive = false;
    }

    if (this.configActive && !this.configClick) {
      this.configActive = false;
    }

    this.configClick = false;
    this.topbarItemClick = false;
    this.menuClick = false;
  }

  onMenuButtonClick(event) {
    this.menuClick = true;
    this.topbarMenuActive = false;

    if (this.isOverlay()) {
      this.overlayMenuActive = !this.overlayMenuActive;
    }
    if (this.isDesktop()) {
      this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
    } else {
      this.staticMenuMobileActive = !this.staticMenuMobileActive;
    }

    event.preventDefault();
  }

  onMenuClick($event) {
    this.menuClick = true;
    this.resetMenu = false;
  }

  onTopbarMenuButtonClick(event) {
    this.topbarItemClick = true;
    this.topbarMenuActive = !this.topbarMenuActive;

    this.hideOverlayMenu();

    event.preventDefault();
  }

  onTopbarSubItemClick(event) {
    event.preventDefault();
  }

  onConfigClick(event) {
    this.configClick = true;
  }

  onRippleChange(event) {
    this.app.ripple = event.checked;
  }

  isHorizontal() {
    return this.app.menuMode === 'horizontal';
  }

  isSlim() {
    return this.app.menuMode === 'slim';
  }

  isOverlay() {
    return this.app.menuMode === 'overlay';
  }

  isStatic() {
    return this.app.menuMode === 'static';
  }

  isMobile() {
    return window.innerWidth < 1025;
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  isTablet() {
    const width = window.innerWidth;
    return width <= 1024 && width > 640;
  }

  hideOverlayMenu() {
    this.overlayMenuActive = false;
    this.staticMenuMobileActive = false;
  }

  changeMenuMode(menuMode: string) {
    this.app.menuMode = menuMode;
    this.staticMenuDesktopInactive = false;
    this.overlayMenuActive = false;
  }
}
