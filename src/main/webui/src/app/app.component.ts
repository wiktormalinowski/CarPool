import {Component, OnInit} from '@angular/core';
import {CarListComponent} from '../components/car-list/car-list.component';
import {NavbarComponent} from '../components/navbar/navbar.component';
import {CarListContainerComponent} from '../components/car-list-container/car-list-container.component';
import {AuthService} from '../services/auth.service';
import {LoginPageComponent} from '../components/login-page/login-page.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CarListContainerComponent, LoginPageComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'webui';

  isAuthenticated = false;
  loading = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: (user) => {
        this.isAuthenticated = true;
        this.loading = false;
      },
      error: () => {
        this.isAuthenticated = false;
        this.loading = false;
      }
    });
  }

}
