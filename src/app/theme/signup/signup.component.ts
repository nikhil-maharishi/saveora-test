import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  show: Boolean = false;

  signInForm: FormGroup = new FormGroup({})
  emailpattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
  passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router, private authService: AuthService) { }
  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailpattern)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordpattern)]],
      // cnfrmpassword: ["", [Validators.required,]],
      termCheck: [true, [Validators.required,]]
    },
      {
        // validator: this.ConfirmPasswordValidator("password","cnfrmpassword")
      }
      
    )
   
  }
  
  onSubmit(newUser:any):any;

  onSubmit(newUSer: any) {
    this.api.signUp(newUSer).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/profile')
    }
    )
  }

  showPassword() {
    this.show = !this.show;
  }
}
