import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guard/admin.guard';
import { AuthenticationGuard } from './guard/authentication.guard';
import { ActionsResolver } from './resolver/actions.resolver';
import { RolesResolver } from './resolver/roles.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./component/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthenticationGuard]
  },
  { 
    path: 'login', 
    loadChildren: () => import('./component/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'authorize/discord/:token', 
    loadChildren: () => import('./component/authorize/discord/discord.module').then(m => m.DiscordModule)
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./component/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard],
    resolve: { roles: RolesResolver, actions: ActionsResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
