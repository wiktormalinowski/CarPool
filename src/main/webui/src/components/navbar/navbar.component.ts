import { Component } from '@angular/core';
import {LogoutComponent} from '../logout/logout.component';

@Component({
  selector: 'app-navbar',
  imports: [
    LogoutComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
