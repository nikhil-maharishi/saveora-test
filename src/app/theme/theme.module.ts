import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthCanLoadGuard } from '../guard/auth-can-load.guard';
import { AuthGuard } from '../guard/auth.guard';

const commonThemeRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
    // canLoad:[AuthCanLoadGuard] 

  },
  {
    path: 'user-activity',
    loadChildren: () => import('./user-activity/user-activity.module').then(m => m.UserActivityModule),
    canActivate: [AuthGuard]
    // canLoad:[AuthCanLoadGuard]
  },

];

const routes: Routes = [
  {
    path: "",
    component: ThemeComponent,
    children: commonThemeRoutes
  }
]

@NgModule({
  declarations: [

  ],
  // providers:[AuthCanLoadGuard],
  imports: [
    CommonModule,


    RouterModule.forChild(routes)
  ]
})
export class ThemeModule { }
