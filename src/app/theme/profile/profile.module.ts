import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule,Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
    // canActivate:[AuthGuard]
  }
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProfileModule { }
