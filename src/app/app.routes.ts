import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/lending/landing-page.component';
import { AllOrganizationsComponent } from './components/allorganization/all-organizations.component';
import { LoginComponent } from './components/login/login.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback/auth-callback.component';
import { ApplyComponent } from './components/apply/apply.component';


export const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'all-organizations', component: AllOrganizationsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auth/callback', component: AuthCallbackComponent },
  { path: 'apply',component: ApplyComponent,},
  { path: '**', redirectTo: '' }
];
