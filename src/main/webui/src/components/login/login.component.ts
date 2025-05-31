import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin(event: Event): void {
    event.preventDefault();

    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        if (response.status === 200) {
          console.log('Zalogowano pomyślnie');
        } else {
          console.error('Błąd logowania');
        }
      },
      error: (err) => {
        console.error('Błąd HTTP', err);
      },
    });
  }
}
