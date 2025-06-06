import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  constructor(private router: Router) {}

  onLogout(): void {
    document.cookie = 'quarkus-credential=; Max-Age=0; path=/';

    window.location.reload();
  }
}
