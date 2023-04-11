import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedLayoutComponent } from './shared-layout/shared-layout.component';

const commonRoutes: Routes = [
	{
		path: "",
		loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule)
	},
];


const routes: Routes = [
  {
    path: "",
		component: SharedLayoutComponent,
		children: commonRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
