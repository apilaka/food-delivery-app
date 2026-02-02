import { NgModule } from '@angular/core';
 
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './components/header.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [
    HeaderComponent
    
  ],
  imports: [
    
    HeaderRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {}
