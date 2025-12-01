import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from '../../shared/service/shared-data.service';
import { AwsUser } from '../model/User';
import { UserService } from '../service/user.service';
// import { BrowserModule } from "@angular/platform-browser";
 

@Component({
  selector: 'user-login',
  templateUrl: './user.component.html',
  // imports: [BrowserModule]
})
export class LoginComponent {

  loginForm!: FormGroup;
  authorized: Boolean =true;
  awsUser: AwsUser | null = null;

  constructor(
    private fb: FormBuilder,
     private userService: UserService,
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit() {
    // this.loginForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', Validators.required]
    // });
this.loginProcess();
    // this.userService.findUserById(2002).subscribe(user=>{
    //   this.awsUser=user;
    //    this.sharedDataService.setUserData(this.awsUser);
    // })
    
  }

  get email() { return this.loginForm.get('email')!; }
  get password() { return this.loginForm.get('password')!; }

//   onLogin() {
//  //   if (this.loginForm.invalid) return;

//     // this.authService.login(this.loginForm.value).subscribe({
//     //   next: (res) => {
//     //     console.log("Login success:", res);
//     //     this.router.navigate(['/dashboard']);
//     //   },
//     //   error: (err) => {
//     //     console.error("Login failed:", err);
//     //     alert("Invalid login credentials");
//     //   }
//     // });
 // }
loginProcess() {
  console.log("Logging in");

  this.userService.findUserById(2002).subscribe({
    next: (user) => {
      this.awsUser = user;
      this.sharedDataService.setUserData(this.awsUser);
      // console.log("User fetched:", this.awsUser);

      // Store the user data
      this.sharedDataService.setUserData(this.awsUser);

      // Navigate AFTER the data is ready
      this.router.navigate(['/restaurant']);
    },
    error: (err) => {
      console.error("User fetch failed", err);
    }
  });
}

}