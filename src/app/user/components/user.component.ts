import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from '../../shared/service/shared-data.service';
import { AwsUser } from '../model/User';
import { UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';   // ✅ Add this

@Component({
  selector: 'user-login',
  templateUrl: './user.component.html',
  // imports: [BrowserModule],
  imports: [FormsModule],


})
export class LoginComponent {

  loginForm!: FormGroup;
  authorized: Boolean = true;
  awsUser: AwsUser | null = null;
  username: string = "";
  password: any;


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit() {
    this.loginProcess(this.username);
  }
  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  onSubmit() {
    console.log('User Input:', this.userForm.value);
  }
  loginProcess(username: String) {
    console.log("Logging in");
    this.findUserByUsername(username);
  }

  findUserByUsername(username: String) {
    this.userService.findUserByUsername(username).subscribe({
      next: (user) => {
        this.awsUser = user;
        this.sharedDataService.setUserData(this.awsUser);
        console.log(" Username:", this.awsUser.userName);
        console.log("User Password:", this.awsUser.userPassword);
        console.log("Supplied username:", username);
        console.log("Supplied Password:", this.password);

        // Store the user data
        this.sharedDataService.setUserData(this.awsUser);

        // Navigate AFTER the data is ready
       // this.router.navigate(['/user']);

    if(this.authenticated())    {
            this.router.navigate(['/restaurant']);
        }
        else
     {
        console.error("Failed login, access denied");
          
      }
      },
      error: (err) => {
        console.error("Access denied", err);
      }
    });
  }

  authenticated(){
    return this.awsUser?.userName==this.username && this.awsUser?.userPassword==this.password;
  }



}