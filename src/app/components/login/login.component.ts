import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router // <-- добавляем роутер
  ) {}

  onLogin() {
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (res) => {
        console.log('Вход успешен', res);
        localStorage.setItem('token', res.access_token);

        // РЕДИРЕКТ на страницу организаций
        this.router.navigate(['/all-organizations']);
      },
      error: (err) => {
        console.error('Ошибка входа:', err);
        alert('Неверный логин или пароль');
      }
    });
  }
  loginWithGoogle() {
    const realm = 'Google-Auth';
    const clientId = 'students-admin-api'; // ✅ должен совпадать с тем, что в AuthCallback
    const redirectUri = encodeURIComponent('http://localhost:4200/auth/callback');
    const scope = 'openid';
  
    const authorizationUrl =
      `https://kc.umto.kz/realms/${realm}/protocol/openid-connect/auth` +
      `?response_type=code` +
      `&client_id=${clientId}` +
      `&redirect_uri=${redirectUri}` +
      `&scope=${scope}` +
      `&kc_idp_hint=google`;
  
    window.location.href = authorizationUrl;
  }
  
  
  
}
