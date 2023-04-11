import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "../service/auth.service";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    if (token) {
      // If we have a token, we set it to the header
      req = req.clone({
        setHeaders: { Authorization: `Authorization token ${token}` }
      });

    }

    return next.handle(req).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // redirect user to the logout page
            this.router.navigate(['login'])
          }
        }
        return throwError(err);
      })
    )
  }
}