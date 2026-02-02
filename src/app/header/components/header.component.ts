import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../shared/service/shared-data.service';
 

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
username: any;
  
constructor (private sharedDataService: SharedDataService){

}
 
 
 
  ngOnInit(): void {
   let username = this.sharedDataService.getUserData()?.userName;

 this.username=username;

  }
 

}
