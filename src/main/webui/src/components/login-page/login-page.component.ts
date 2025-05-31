import {AuthService} from '../../services/auth.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  imports: [FormsModule, CommonModule],
})
export class LoginPageComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.authService.login(this.username, this.password).subscribe({
      next: () => window.location.reload(),
      error: () => alert('Błąd logowania'),
    });
  }
}
