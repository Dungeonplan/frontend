import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { User } from './class/user';
import { MediaMatcher } from '@angular/cdk/layout';
import { UserFactory } from './class/user-factory';
import { Router } from '@angular/router';
import { UserStoreService } from './service/user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('snav') sidenav: any;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  user: User = UserFactory.empty();

  constructor(changeDetectorRef: ChangeDetectorRef,
              private userStore: UserStoreService,
              media: MediaMatcher,
              private router: Router) {
    this.user = this.userStore.getCurrentUser();
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this._mobileQueryListener = () => changeDetectorRef.detectChanges()
  }

  ngOnInit(): void {
    this.user = this.userStore.getCurrentUser();
  }
  
  logout() {
    this.sidenav.close()
    this.userStore.logoutCurrentUser().subscribe(_ => {
      this.user = UserFactory.empty()
      this.router.navigate(['/login']);
    });
  }
}
