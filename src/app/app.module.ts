import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedLayoutComponent } from './shared-layout/shared-layout.component';
import { SharedLayoutModule } from './shared-layout/shared-layout.module';
import { ThemeComponent } from './theme/theme.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AuthInterceptor } from './guard/auth.interceptor';
import { ApiService } from './service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    
    ThemeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedLayoutModule,
   HttpClientModule,
   RouterModule
  ],
  providers: [
    // AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    // ApiService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
