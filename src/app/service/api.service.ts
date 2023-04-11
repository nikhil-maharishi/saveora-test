import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// interface user{
//   email:string,
//   password:string
// }

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) { }

  getuser(data: any) {
    return this.http.post('https://165e-122-176-117-90.ngrok.io/api-token-auth/', data)
    // .subscribe((res: any) => {
    //   localStorage.setItem('token', res.token);
    //   this.router.navigate(['profile'])
    // })
  }
  signUp(data: any) {
    return this.http.post('https://165e-122-176-117-90.ngrok.io/register-user/', data)
  }

  getDetail() {
    return this.http.get('https://165e-122-176-117-90.ngrok.io/get-detail/')
  }
  // getToken() {
  //   return localStorage.getItem('token');
  // }


  //  header = new HttpHeaders()
  //   .append('Authorization', 'Token ' + this.getToken());
  // private myHeader() {
  //   let header = new HttpHeaders();
  //   // header = header.append('Content-Type', 'application/json; charset=utf-8');
  //   header = header.append('Authorization', 'Token ' + this.getToken());
  //   return { headers: header };
  //   }
}
