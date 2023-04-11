import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private api: ApiService,private authService:AuthService) { }
  data:any= []
  ngOnInit(): void {

    this.api.getDetail().subscribe((res) => {
      console.log(res);
      this.data = res
    })
  }

  logOut(){
    this.authService.clear();
  }
}
