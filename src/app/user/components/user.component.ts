import { ChangeDetectionStrategy, Component, OnInit, Renderer2, signal, WritableSignal  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from '../../shared/service/shared-data.service';

import { UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';   // ✅ Add this
import { AwsUser } from '../model/aws-user';
import { AwsUserInterface } from '../model/aws-user-interface';
import { BehaviorSubject, interval, Observable, of } from 'rxjs';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { CommonModule, NgIf } from '@angular/common';

 
@Component({
  selector: 'user-login',
  templateUrl: './user.component.html',
  // imports: [BrowserModule],
  imports: [FormsModule,CommonModule],
})
export class LoginComponent implements OnInit {
[x: string]: any;
    title: WritableSignal<string> = signal('LoginComponent');
 

  loginForm!: FormGroup;
  authorized: Boolean = true;
  awsUser: AwsUser | null = null;
  username: string = "";
  password: any;
  myAwsUser: AwsUser | undefined;
  data = interval(1000);
  awsusers:AwsUser[] = [];
  mytitle:string ='India';

  meena!: Observable<"India">;
  changeDetaction: ChangeDetectionStrategy.OnPush = 0;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private sharedDataService: SharedDataService
  ) {
    const users = new BehaviorSubject<AwsUserInterface[]>([]);
    setTimeout(() => {
      users.next
        ([{ userId: 1, userName: 'Mahendra narayan Jhat', userPassword: 'saibaba', address: '390', city: 'Glen Allen' }]);

    }, 2000);
    users.subscribe((res) => console.log('res', res[0]));

 
    // Create an Observable that emits "India"
    this.meena = new Observable<"India">(observer => {
      observer.next("India"); // emit the value
      observer.complete(); // mark it as complete
    });

  }

  ngOnInit() {
    this.mytitle="Indian Insitute of tefchnology";
 this.title.set("Mera Bharat Mahan");
 

  this.awsusers =[ {
      userId: 111,
      userName: 'Sheela Patel ',
      userPassword: 'saibaba',
      address: '3900',
      city: 'Glen Allen'
    },{
      userId: 111,
      userName: 'Sheela Patel ',
      userPassword: 'saibaba',
      address: '3900',
      city: 'Glen Allen'
    },{
      userId: 111,
      userName: 'Sheela Patel ',
      userPassword: 'saibaba',
      address: '3900',
      city: 'Glen Allen'
    }
  ,{
      userId: 111,
      userName: 'Sheela Patel ',
      userPassword: 'saibaba',
      address: '3900',
      city: 'Glen Allen'
    }
  ,{
      userId: 111,
      userName: 'Sheela Patel ',
      userPassword: 'saibaba',
      address: '3900',
      city: 'Glen Allen'
    }];
    this.meena.subscribe(data => {
      console.log("++++++++++++++++++++" + data);
    });

    // this.loginProcess(this.username);
    const emptyUser = new AwsUser();
    console.log(emptyUser.userName); // undefined

    const partialUser = new AwsUser({ userName: 'Ananta' });
    console.log(partialUser.userName); // 'Ananta'

    const fullUser = new AwsUser({
      userId: 111,
      userName: 'Ananta',
      userPassword: 'saibaba',
      address: '3900',
      city: 'Glen Allen'
    });
    console.log(fullUser.userId); // '3900'
    console.log(fullUser.userName); // '3900'
    console.log(fullUser.address); // '3900'
    console.log(fullUser.city); // '3900'
    console.log(fullUser.userPassword); // '3900'

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
        console.log(" Username:", this.awsUser?.userName);
        console.log("User Password:", this.awsUser?.userPassword);
        console.log("Supplied username:", username);
        console.log("Supplied Password:", this.password);

        // Store the user data
        this.sharedDataService.setUserData(this.awsUser);

        // Navigate AFTER the data is ready
        // this.router.navigate(['/user']);

        // if(this.authenticated())    {
        this.router.navigate(['/restaurant']);
        //   }
        //     else
        //  {
        //    console.error("Failed login, access denied");

        //    }
      },
      //     error: (err) => {
      //     console.error("Access denied", err);
      //     console.log(this.password)
      //    }
    });
  }

  authenticated() {
    return this.awsUser?.userName == this.username && this.awsUser?.userPassword == this.password;
  }
  ngDoCheck() {
    console.log('Change detection running in child');
  }
  checkChanges() {
    console.log("Checking detection");
    return this.changeDetaction.toLocaleString;

  }
  // ngOnInit

  // ngDoCheck

  // ngAfterContentInit

  // ngAfterContentChecked

  // ngAfterViewInit

  // ngAfterViewChecked

  // ngDoCheck / ngAfterContentChecked / ngAfterViewChecked (repeated for change detection cycles)

  // ngOnDestroy (when component is removed)
}