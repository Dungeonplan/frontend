import { async, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppMenuComponent } from './app.menu.component';
import { AppFooterComponent } from './app.footer.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MenuService } from './app.menu.service';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ScrollPanelModule, RouterTestingModule],
      declarations: [
        AppTopBarComponent,
        AppMenuComponent,
        AppFooterComponent,
        AppComponent,
        AppMainComponent,
      ],
      providers: [MenuService],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
