import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeComponent } from "./components/authorize/authorize.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import {AuthorizeGuard} from "./guards/authorize.guard";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'authorize/:token',
        component: AuthorizeComponent,
        canActivate: [AuthorizeGuard]
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
