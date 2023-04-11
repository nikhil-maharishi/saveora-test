import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserActivityComponent } from './user-activity.component';

import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: UserActivityComponent,
  }
];

@NgModule({
  declarations: [UserActivityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UserActivityModule { }
