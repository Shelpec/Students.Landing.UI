import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}

  goToApply() {
    window.scrollTo({ top: 0 });
    location.href = '/apply';
  }

  goToLogin() {
    location.href = '/login';
  }

  goToProfile() {
    location.href = '/profile';
  }
}
