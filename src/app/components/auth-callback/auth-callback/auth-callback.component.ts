import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-auth-callback',
  template: `    
  <div class="container">
  <h2>Авторизация через Google...</h2>
  <p>Обработка...</p>
</div>`

  
})
export class AuthCallbackComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (!code) {
      alert('Не удалось получить код авторизации от Keycloak / Google');
      this.router.navigate(['/login']);
      return;
    }

    const realm = 'Google-Auth';
    const tokenUrl = `https://kc.umto.kz/realms/${realm}/protocol/openid-connect/token`;

    const clientId = 'students-admin-api';
    const clientSecret = 'IlAlD9lzQ4zkt8dKfqlBRe4MlLS9zubB'; // Замените на ваш реальный секрет
    const redirectUri = 'http://localhost:4200/auth/callback';

    const body = new URLSearchParams();
    body.set('grant_type', 'authorization_code');
    body.set('code', code);
    body.set('client_id', clientId);
    body.set('client_secret', clientSecret);
    body.set('redirect_uri', redirectUri);

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    this.http.post(tokenUrl, body.toString(), { headers }).subscribe({
      next: (tokenResp: any) => {
        console.log('Ответ с токеном', tokenResp);
        localStorage.setItem('token', tokenResp.access_token);
        this.router.navigate(['/all-organizations']);
      },
      error: (err) => {
        console.error('Ошибка при получении токена', err);
        alert('Ошибка при получении токена');
        this.router.navigate(['/login']);
      }
    });
  }
}