import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';;
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';
interface user {
  email: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  show: Boolean = false;

  signInForm: FormGroup = new FormGroup({})
  emailpattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
  passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router, private authService: AuthService) { }
  ngOnInit() {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(this.emailpattern)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordpattern)]],
    },
      {
        // validator: this.ConfirmPasswordValidator("password","cnfrmpassword")
      }
    )


  }
  onSubmit(newUser: user) {
    console.log(newUser);
    this.api.getuser(newUser).subscribe((res:any)=>{
      console.log(res.token);
      if (res.token) {
          // store token
         this.authService.setToken(res.token);
         this.router.navigate(['profile']);
          
        }

      this.signInForm.reset()
    })
      // if (res.token) {
      //   // store token
      //   localStorage.setItem('token',res.token);
      //   // localStorage.setItem("token",res.token)
      //   this.router.navigate(['profile']);
      // }



    // })

  
  }
  showPassword() {
    this.show = !this.show;
  }


}
