
import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/lending/landing-page.component';
import { AllOrganizationsComponent } from './components/allorganization/all-organizations.component';

// Импортируем наши страницы

export const appRoutes: Routes = [
  // Главная страница (лендинг)
  { path: '', component: LandingPageComponent },
  // Страница all-organizations
  { path: 'all-organizations', component: AllOrganizationsComponent },
  // Пример страницы 404, если нужно
  { path: '**', redirectTo: '' }
];
