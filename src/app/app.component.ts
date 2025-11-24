import { Component } from '@angular/core';
import { HeaderModule } from './header/header.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food-delivery-app';
}
