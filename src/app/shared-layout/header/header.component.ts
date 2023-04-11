import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loggedIn:boolean = true
  constructor(public authService: AuthService) { }

  isLoggedIn() {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    return false;
  }
}
