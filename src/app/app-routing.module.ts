import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationResolver } from './services/authorization.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'authorize/:token',
        loadChildren: () =>
          import('./modules/routing/dummy/dummy.module').then(
            (m) => m.DummyModule
          ),
        resolve: {
          routeResolver: AuthorizationResolver,
        },
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/routing/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
