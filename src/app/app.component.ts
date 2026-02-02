import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { AwsUserInterface } from './user/model/aws-user-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title: WritableSignal<string> = signal('Original Title');
  users=signal<AwsUserInterface[]>([]);
  ngOnInit(): void {
    setTimeout(()=>{
      this.users.set([]);
    },1222);
 

   
    
  }
    changeTitle (event: Event){
    const  title=(event.target as HTMLInputElement).value;
    this.title.set(title);

  }
}
