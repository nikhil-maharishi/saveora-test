import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedLayoutComponent } from './shared-layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SharedLayoutComponent
  ],
  exports: [HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedLayoutModule { }
